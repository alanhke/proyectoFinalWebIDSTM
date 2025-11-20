document.addEventListener('DOMContentLoaded', () => {
    // Get all selection elements
    const langCards = document.querySelectorAll('.lang-card');
    const levelBtns = document.querySelectorAll('.level-btn');
    const topicBtns = document.querySelectorAll('.topic-btn');
    const saveBtn = document.getElementById('save-config-btn');

    // Load saved config or use defaults
    const savedConfig = JSON.parse(localStorage.getItem('exerciseConfig')) || {
        lang: 'es',
        level: 'beginner',
        topic: 'grammar'
    };

    // Set initial selections based on saved config
    langCards.forEach(card => {
        if (card.dataset.lang === savedConfig.lang) {
            card.classList.add('active');
            card.style.border = '2px solid #1cb0f6';
            card.style.backgroundColor = '#ddf4ff';
        }
    });

    levelBtns.forEach(btn => {
        if (btn.dataset.level === savedConfig.level) {
            btn.classList.add('active');
        }
    });

    topicBtns.forEach(btn => {
        if (btn.dataset.topic === savedConfig.topic) {
            btn.classList.add('active');
        }
    });

    // Handle language card clicks
    langCards.forEach(card => {
        card.addEventListener('click', () => {
            langCards.forEach(c => {
                c.classList.remove('active');
                c.style.border = '';
                c.style.backgroundColor = '';
            });
            card.classList.add('active');
            card.style.border = '2px solid #1cb0f6';
            card.style.backgroundColor = '#ddf4ff';
        });
    });

    // Handle level button clicks
    levelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            levelBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Handle topic button clicks
    topicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            topicBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Save configuration
    saveBtn.addEventListener('click', () => {
        const selectedLang = document.querySelector('.lang-card.active')?.dataset.lang || 'es';
        const selectedLevel = document.querySelector('.level-btn.active')?.dataset.level || 'beginner';
        const selectedTopic = document.querySelector('.topic-btn.active')?.dataset.topic || 'grammar';

        const config = {
            lang: selectedLang,
            level: selectedLevel,
            topic: selectedTopic
        };

        localStorage.setItem('exerciseConfig', JSON.stringify(config));

        // Redirect to task page
        window.location.href = '../task/task.html';
    });
});
