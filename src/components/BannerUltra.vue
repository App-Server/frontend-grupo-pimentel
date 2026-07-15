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
          <h1 class="heading-title text-uppercase">
            Baixe o <span class="text-yellow">App</span> da <br class="d-none d-md-block"> Ultra Popular
          </h1>
          
          <h2 class="sub-title">
            para garantir praticidade e economia na palma da mão
          </h2>
          
          <p class="description">
            No aplicativo da Ultra Popular, você compra os melhores itens, com o preço que só a mais barata do Brasil tem!
          </p>

          <!-- Badges de Download -->
          <div class="download-badges">
            <a href="https://apps.apple.com/br/app/ultra-popular-farm%C3%A1cia-online/id1605222440" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" class="badge-img">
            </a>
            <a href="https://play.google.com/store/search?q=ultra+popular+farmacia&c=apps&hl=pt_BR" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" class="badge-img">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-container {
  width: 100%;
  overflow: hidden;
  background-color: #e30613; /* Vermelho oficial de fundo */
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

/* --- NOVO: Posicionamento do Conteúdo em Cima do Banner --- */
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Empurra o texto para a direita (espaço vazio) */
  padding-right: 8%; /* Distância da borda direita */
  box-sizing: border-box;
  line-height: normal; /* Reseta o line-height do wrapper */
}

.banner-content {
  max-width: 500px;
  color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  text-align: left;
  z-index: 2;
}

.heading-title {
  font-size: clamp(1.8rem, 3vw, 3rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.text-yellow {
  color: #ffc600; /* Amarelo oficial */
}

.sub-title {
  font-size: clamp(1rem, 1.8vw, 1.5rem);
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 15px;
}

.description {
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  opacity: 0.9;
  margin-bottom: 25px;
  line-height: 1.5;
}

.download-badges {
  display: flex;
  gap: 15px;
}

.badge-img {
  height: clamp(36px, 4vw, 46px);
  transition: transform 0.2s ease;
}

.badge-img:hover {
  transform: scale(1.05);
}

/* --- AJUSTES RESPONSIVOS (MOBILE) --- */
@media (max-width: 992px) {
  .banner-overlay {
    padding-right: 5%;
  }
  .banner-content {
    max-width: 400px;
  }
}

@media (max-width: 768px) {
  .banner-img {
    /* No celular, garantimos que ele foque na modelo (esquerda/centro da foto) */
    min-height: 400px;
    object-position: 20% center; 
  }

  .banner-overlay {
    justify-content: center; /* Centraliza o texto no mobile */
    padding: 20px;
    /* Cria uma camada escura avermelhada suave por cima da foto no celular para garantir a leitura do texto */
    background: linear-gradient(to top, rgba(227, 6, 19, 0.9) 60%, rgba(227, 6, 19, 0.3) 100%);
  }

  .banner-content {
    text-align: center;
    max-width: 100%;
  }

  .download-badges {
    justify-content: center;
  }
}

/* Efeito suave de entrada (Seu original preservado) */
.banner-img {
  animation: fadeIn 1.2s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(1.02); }
  to { opacity: 1; transform: scale(1); }
}
</style>