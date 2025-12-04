const resetForm = document.getElementById('reset-form');
const messageContainer = document.getElementById('message-container');
const submitBtn = document.getElementById('submit-btn');

resetForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Limpiar mensajes anteriores
    messageContainer.innerHTML = '';

    // Validar que las contraseñas coincidan
    if (newPassword !== confirmPassword) {
        showMessage('Las contraseñas no coinciden', 'danger');
        return;
    }

    // Validar longitud de contraseña
    if (newPassword.length < 6) {
        showMessage('La contraseña debe tener al menos 6 caracteres', 'danger');
        return;
    }

    // Deshabilitar botón y mostrar carga
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Procesando...';

    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('name', name);
        formData.append('new_password', newPassword);

        const response = await fetch('php/reset_password.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            showMessage('¡Contraseña actualizada exitosamente!', 'success');
            resetForm.reset();

            // Redirigir al login después de 2 segundos
            setTimeout(() => {
                window.location.href = 'login.php';
            }, 2000);
        } else {
            showMessage(data.error || 'Error al actualizar la contraseña', 'danger');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('Error de conexión. Por favor intenta de nuevo.', 'danger');
    } finally {
        // Restaurar botón
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Restablecer Contraseña';
    }
});

function showMessage(message, type) {
    messageContainer.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
}
