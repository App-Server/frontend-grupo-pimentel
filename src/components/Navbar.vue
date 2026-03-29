<template>
  <nav class="navbar navbar-expand-lg navbar-dark custom-navbar p-3">
    <div class="container">
      <RouterLink class="navbar-brand ms-lg-5" to="/">
        <img src="@/assets/logo-gp.png" alt="Grupo Pimentel" height="80">
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav gap-lg-4">
          <li class="nav-item">
            <RouterLink class="nav-link active fw-bold" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="ze-do-bairro">Zé de Bairro</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="ultra">Ultra Popular</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="">Promedh</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link fw-bold" to="">DPA & Promedh</RouterLink>
          </li>
        </ul>
      </div>

      <div class="d-none d-lg-flex me-lg-5 gap-3">
        <a href="#" class="text-white"><i class="bi bi-instagram fs-4"></i></a>
        <a href="#" class="text-white"><i class="bi bi-facebook fs-4"></i></a>
        <a href="#" class="text-white"><i class="bi bi-whatsapp fs-4"></i></a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-navbar {
  /* Cor azul escura baseada na imagem */
  background-color: #002d5f; 
}

.nav-link {
  color: #ffffff !important;
  font-size: 1.1rem;
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 0.8;
}

.bi {
  transition: transform 0.2s;
}

.bi:hover {
  transform: scale(1.1);
}
</style>