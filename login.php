<?php session_start(); ?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Iniciar Sesion - Duolingo Premium</title>
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
      <form id="login-form" action="php/login.php" method="post" class="login-form">
        <h1 class="login-title fw-bold text-center mb-4">Iniciar Sesión</h1>

        <?php if (isset($_GET['error']) && $_GET['error'] == 1): ?>
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> Credenciales inválidas. Verifica tu correo electrónico y contraseña.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        <?php endif; ?>

        <div class="mb-3">
          <label for="email" class="form-label fw-bold">Correo Electrónico</label>
          <input type="email" id="email" name="email" class="form-control form-control-lg bg-light-input"
            placeholder="Correo Electrónico" required />
        </div>

        <div class="mb-4">
          <label for="password" class="form-label fw-bold">Contraseña</label>
          <input type="password" id="password" name="password" class="form-control form-control-lg bg-light-input"
            placeholder="Contraseña" required />
        </div>

        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-duo-primary btn-lg text-white fw-bold">
            Iniciar Sesión
          </button>
        </div>

        <p class="register-link text-center mt-3">
          ¿No tienes cuenta? <a href="registro.php" class="fw-bold text-duo-primary">Regístrate</a>
        </p>

        <p class="text-center mt-2">
          <a href="forgot_password.php" class="text-muted small">¿Olvidaste tu contraseña?</a>
        </p>
      </form>
    </div>
  </main>

  <!-- Footer -->
  <?php include 'php/footer.php'; ?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="js/login_script.js"></script>
</body>

</html>