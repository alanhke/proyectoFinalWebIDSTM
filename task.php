<?php $require_session = true; ?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ejercicios - Duolingo Premium</title>
  <link rel="icon" href="img/logo.png" type="image/png" />

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />

  <link rel="stylesheet" href="css/task_styles.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

<body>
  <!-- HEADER -->
  <?php include 'php/header.php'; ?>

  <main class="bg-light min-vh-100">
    <!-- Navbar -->
    <div class="navbar-duo py-3 mb-4 shadow-sm">
      <div class="container d-flex justify-content-center gap-4 flex-wrap">
        <a href="index.php" class="nav-link-duo active">Inicio</a>
        <a href="config.php" class="nav-link-duo">Configuración</a>
      </div>
    </div>

    <div class="container pb-5">
      <!-- Container de carga de lecciones -->
      <div class="row g-4 justify-content-center" id="lessons-container">
        <!-- Animación de carga -->
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Cargando plan de estudios...</span>
          </div>
          <p class="mt-3 text-muted">Cargando tu plan de estudio personalizado...</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <?php include 'php/footer.php'; ?>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script src="js/task_script.js"></script>
</body>

</html>