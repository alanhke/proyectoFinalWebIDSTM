document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim().toLowerCase();
            const password = document.getElementById('password').value;
            const password2 = document.getElementById('password2').value;

            if (password !== password2) {
                e.preventDefault();
                alert('Las contraseñas no coinciden');
                return;
            }
            if (password.length < 6) {
                e.preventDefault();
                alert('La contraseña debe tener al menos 6 caracteres');
                return;
            }

            // Si pasa las validaciones, el formulario se envía naturalmente
        });
    }
});
