<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Recuperar Contraseña - Duolingo Premium</title>
  <link rel="icon" href="img/logo.png" type="image/png" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />

  <link rel="stylesheet" href="css/login_styles.css" />
</head>

<body>
  <!-- Header -->
  <?php include 'php/header.php'; ?>

  <main class="login-main bg-light d-flex align-items-center justify-content-center py-5">
    <div class="card border-0 shadow-lg p-4 login-card">
      <form id="reset-form" class="login-form">
        <h1 class="login-title fw-bold text-center mb-3">Recuperar Contraseña</h1>
        <p class="text-center text-muted mb-4 small">Ingresa tu información para restablecer tu contraseña</p>

        <!-- Mensajes de éxito/error -->
        <div id="message-container"></div>

        <div class="mb-3">
          <label for="email" class="form-label fw-bold">Correo Electrónico</label>
          <input type="email" id="email" name="email" class="form-control form-control-lg bg-light-input"
            placeholder="Correo Electrónico" required />
        </div>

        <div class="mb-3">
          <label for="name" class="form-label fw-bold">Nombre Completo</label>
          <input type="text" id="name" name="name" class="form-control form-control-lg bg-light-input"
            placeholder="Nombre con el que te registraste" required />
          <small class="text-muted">Debe coincidir con el nombre de tu cuenta</small>
        </div>

        <div class="mb-3">
          <label for="new-password" class="form-label fw-bold">Nueva Contraseña</label>
          <input type="password" id="new-password" name="new_password" class="form-control form-control-lg bg-light-input"
            placeholder="Nueva Contraseña" required minlength="6" />
          <small class="text-muted">Mínimo 6 caracteres</small>
        </div>

        <div class="mb-4">
          <label for="confirm-password" class="form-label fw-bold">Confirmar Contraseña</label>
          <input type="password" id="confirm-password" name="confirm_password" class="form-control form-control-lg bg-light-input"
            placeholder="Confirmar Contraseña" required minlength="6" />
        </div>

        <div class="d-grid gap-2">
          <button type="submit" id="submit-btn" class="btn btn-duo-primary btn-lg text-white fw-bold">
            Restablecer Contraseña
          </button>
        </div>

        <p class="register-link text-center mt-3">
          <a href="login.php" class="fw-bold text-duo-primary">← Volver al inicio de sesión</a>
        </p>
      </form>
    </div>
  </main>

  <!-- Footer -->
  <?php include 'php/footer.php'; ?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="js/forgot_password_script.js"></script>
</body>

</html>
