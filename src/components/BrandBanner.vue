<template>
  <section class="ze-bairro-custom py-5">
    <div class="container py-4">
      <div class="row align-items-center g-5">
        
        <div class="col-lg-6 text-white content-column">
          <div class="logo-wrapper mb-4">
            <img src="@/assets/logo-ze.png" alt="Zé do Bairro" class="logo-ze">
          </div>
          
          <h3 class="section-title fw-bold mb-3">Tradição que cuida, confiança que fica</h3>
          
          <p class="description-text mb-4">
            No coração de cada comunidade, existe alguém em quem todos confiam. 
            Alguém que conhece os vizinhos pelo nome, entende suas necessidades 
            e está sempre pronto para estender a mão.
          </p>
          
          <p class="description-subtext">
            Foi com esse espírito de vizinhança que nasceu a Farmácias Zé do Bairro. 
            Como parte integrante do Grupo Pimentel, trazemos em nosso DNA a solidez 
            de um dos maiores nomes do setor farmacêutico, aliada ao atendimento 
            humanizado que só quem é "de casa" consegue oferecer.
          </p>
        </div>

        <div class="col-lg-6">
          <div class="video-wrapper shadow-lg rounded-4 overflow-hidden">
            <iframe 
              src="https://www.youtube.com/embed/TeqqLlJR9Cw?autoplay=1&mute=1&loop=1&playlist=TeqqLlJR9Cw&controls=1&rel=0" 
              title="Vídeo Zé do Bairro"
              frameborder="0" 
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen>
            </iframe>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Importação de fonte padrão para garantir uniformidade */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.ze-bairro-custom {
  background-color: #DB4040; /* Cor solicitada */
  font-family: 'Inter', sans-serif; /* Padronização da fonte */
  min-height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Ajuste da Logo para remover bugs de renderização */
.logo-ze {
  max-width: 280px;
  height: auto;
  display: block;
  object-fit: contain;
  /* Removido filtros que poderiam causar bugs em logos coloridas */
}

/* Tipografia Padronizada */
.section-title {
  font-size: 2.0rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.description-text {
  font-size: 1.15rem;
  line-height: 1.6;
  opacity: 0.95;
}

.description-subtext {
  font-size: 1.15rem;
  line-height: 1.6;
  opacity: 0.95;
}

/* Container do Vídeo */
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* Proporção 16:9 */
  height: 0;
  border: 4px solid rgba(255, 255, 255, 0.15);
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Responsividade */
@media (max-width: 991px) {
  .ze-bairro-custom {
    text-align: center;
    padding: 3rem 0;
  }
  .logo-wrapper {
    display: flex;
    justify-content: center;
  }
  .section-title {
    font-size: 2rem;
  }
}
</style>