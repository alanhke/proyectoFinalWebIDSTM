<?php
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params(0, '/');
    session_start();
}

if (isset($require_session) && $require_session === true) {
    if (!isset($_SESSION['user'])) {
        header("Location: index.php");
        exit();
    }
}
?>
<header class="header-duo py-3">
    <div class="container position-relative">
      <div class="d-flex justify-content-center align-items-center">
        <a href="index.php" class="text-decoration-none d-flex align-items-center">
            <img src="img/logo.png" alt="Logo Duolingo Premium" class="logo-duo img-fluid" />
            <h1 class="mb-0 fw-bold text-center ms-3 text-dark">Duolingo Premium</h1>
        </a>
      </div>
      <?php if(isset($_SESSION['user'])): ?>
      <a href="php/logout.php" class="btn btn-outline-danger btn-sm position-absolute top-50 end-0 translate-middle-y">
        <i class="fa-solid fa-right-from-bracket me-2"></i>Cerrar Sesión
      </a>
      <?php endif; ?>
    </div>
</header>
