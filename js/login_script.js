document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');
            const email = emailInput.value.trim().toLowerCase();
            const password = passwordInput.value;

            // Get users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Find user with matching email and password
            const user = users.find(u => u.email === email && u.password === password);

            if (!user) {
                alert('Correo o contraseña incorrectos');
                return;
            }

            // Create user session
            const userSession = {
                name: user.name,
                email: user.email,
                isLoggedIn: true
            };

            localStorage.setItem('user', JSON.stringify(userSession));

            // Show success message
            alert('¡Bienvenido de nuevo, ' + user.name + '!');

            // Redirect to Main Page to show welcome message
            window.location.href = 'index.html';
        });
    }
});
