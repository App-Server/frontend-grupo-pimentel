<template>
  <section class="banner-container">
    <div class="banner-wrapper">
      <img 
        src="https://www.drogariasultrapopular.com.br/wp-content/themes/acfarma/assets/images/UltraPopular_banner3.jpg" 
        alt="Banner Ultra Popular"
        class="banner-img"
      />
      <div class="banner-overlay">
        <div class="banner-content">
          </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-container {
  width: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
}

.banner-wrapper {
  position: relative;
  width: 100%;
  /* Mantém a proporção do banner original */
  line-height: 0; 
}

.banner-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  /* Ajuste de altura máxima para não ocupar a tela inteira em monitores muito grandes */
  max-height: 800px; 
}

@media (max-width: 768px) {
  .banner-img {
    /* No celular, garantimos que ele foque no centro da imagem */
    min-height: 200px;
    object-position: center;
  }
}

/* Efeito suave de entrada */
.banner-img {
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
}
</style>