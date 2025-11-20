document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const authButtons = document.getElementById('auth-buttons');
    const welcomeContainer = document.getElementById('welcome-container');
    const welcomeMessage = document.getElementById('welcome-message');
    const startBtn = document.getElementById('start-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (user) {
        // User is logged in
        if (authButtons) authButtons.classList.add('d-none');
        if (welcomeContainer) welcomeContainer.classList.remove('d-none');
        if (welcomeMessage) welcomeMessage.textContent = `Bienvenido, ${user.name}`;

        // Redirect "Empieza" to task page
        if (startBtn) startBtn.href = '../task/task.html';

        // Show logout button
        if (logoutBtn) logoutBtn.classList.remove('d-none');
    } else {
        // User is logged out
        if (authButtons) authButtons.classList.remove('d-none');
        if (welcomeContainer) welcomeContainer.classList.add('d-none');

        // Redirect "Empieza" to registration
        if (startBtn) startBtn.href = '../registro/registro.html';

        // Hide logout button
        if (logoutBtn) logoutBtn.classList.add('d-none');
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                localStorage.removeItem('user');
                window.location.reload();
            }
        });
    }
});
