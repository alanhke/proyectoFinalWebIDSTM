document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form values
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim().toLowerCase();
            const password = document.getElementById('password').value;
            const password2 = document.getElementById('password2').value;

            // Validate passwords match
            if (password !== password2) {
                alert('Las contraseñas no coinciden');
                return;
            }

            // Validate password length
            if (password.length < 6) {
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }

            // Get existing users from localStorage or initialize empty array
            const users = JSON.parse(localStorage.getItem('users')) || [];

            // Check if email already exists
            const emailExists = users.some(user => user.email === correo);
            if (emailExists) {
                alert('Este correo ya está registrado');
                return;
            }

            // Create new user object
            const newUser = {
                id: Date.now(), // Simple ID generation
                name: nombre,
                email: correo,
                password: password, // In production, this should be hashed!
                createdAt: new Date().toISOString()
            };

            // Add user to array
            users.push(newUser);

            // Save to localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Auto-login: set current user session
            const userSession = {
                name: newUser.name,
                email: newUser.email,
                isLoggedIn: true
            };
            localStorage.setItem('user', JSON.stringify(userSession));

            // Show success message
            alert('¡Registro exitoso! Bienvenido, ' + nombre);

            // Redirect to config page
            window.location.href = 'config.html';
        });
    }
});
