<?php session_set_cookie_params(0, '/'); session_start(); ?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Crear cuenta - Duolingo Premium</title>
  <link rel="icon" href="img/logo.png" type="image/png" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="css/registro_styles.css" />
</head>

<body>
  <!-- Header -->
  <?php include 'php/header.php'; ?>

  <!-- Main -->
  <main class="login-main bg-light d-flex align-items-center justify-content-center py-5">
    <div class="card border-0 shadow-lg p-4 login-card">
      <form id="register-form" action="php/registro.php" method="post" class="login-form">
        <h1 class="login-title fw-bold text-center mb-4">Crear cuenta</h1>

        <div class="mb-3">
          <label for="nombre" class="form-label fw-bold">Nombre completo</label>
          <input type="text" id="nombre" name="nombre" class="form-control form-control-lg bg-light-input"
            placeholder="Ingresa tu nombre" required />
        </div>

        <div class="mb-3">
          <label for="correo" class="form-label fw-bold">Correo electrónico</label>
          <input type="email" id="correo" name="correo" class="form-control form-control-lg bg-light-input"
            placeholder="Ingresa tu correo" required />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label fw-bold">Contraseña</label>
          <input type="password" id="password" name="password" class="form-control form-control-lg bg-light-input"
            placeholder="Ingresa tu contraseña" required />
        </div>

        <div class="mb-4">
          <label for="password2" class="form-label fw-bold">Confirmar contraseña</label>
          <input type="password" id="password2" name="password2" class="form-control form-control-lg bg-light-input"
            placeholder="Confirma tu contraseña" required />
        </div>

        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-duo-primary btn-lg">
            Registrarse
          </button>
        </div>

        <p class="register-link text-center mt-3">
          ¿Ya tienes cuenta?
          <a href="login.php" class="fw-bold text-duo-primary">Inicia sesión</a>
        </p>
      </form>
    </div>
  </main>

  <!-- Footer -->
  <?php include 'php/footer.php'; ?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="js/registro_script.js?v=2"></script>
</body>

</html>