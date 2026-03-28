<template>
  <section class="social-responsibility py-5 bg-white">
    <div class="container py-lg-5">
      
      <div class="row align-items-center mb-5 g-4">
        <div class="col-lg-8">
          <h2 class="display-5 fw-bold text-navy mb-3">Responsabilidade Social</h2>
          <h3 class="h4 text-primary-light mb-4">Nosso Compromisso com a Vida</h3>
          <p class="lead text-muted description-main">
            No Grupo Pimentel, acreditamos que a nossa responsabilidade vai muito além da logística e da comercialização de produtos farmacêuticos. Entendemos que somos um elo fundamental na construção de uma sociedade mais justa e saudável.
          </p>
        </div>
        <div class="col-lg-4 text-center d-none d-lg-block">
          <img src="@/assets/logo-gp-azul.png" alt="Grupo Pimentel" class="img-fluid floating-logo">
        </div>
      </div>

      <div class="row g-4">
        <div v-for="(item, index) in compromissos" :key="index" class="col-md-6">
          <div class="commitment-card p-4 h-100 border-0 shadow-sm rounded-4">
            <div class="d-flex align-items-start">
              <div class="icon-box me-3 mt-1">
                <span class="step-number">{{ index + 1 }}</span>
              </div>
              <div>
                <h4 class="fw-bold text-navy h5">{{ item.titulo }}</h4>
                <p class="text-muted small-text mb-0">{{ item.texto }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const compromissos = [
  {
    titulo: 'Democratização do Acesso à Saúde',
    texto: 'Através das nossas bandeiras de varejo, trabalhamos incansavelmente para que o tratamento de saúde não seja um privilégio, mas um direito acessível, levando economia real para regiões onde a assistência é vital.'
  },
  {
    titulo: 'Apoio às Comunidades Locais',
    texto: 'Nossas farmácias são centros de apoio. Apoiamos iniciativas locais, campanhas de vacinação e ações de educação em saúde, fortalecendo os laços com os bairros onde estamos inseridos.'
  },
  {
    titulo: 'Sustentabilidade e Ética',
    texto: 'Implementamos processos logísticos que visam a redução de desperdícios e o descarte correto de resíduos químicos e medicamentos vencidos, protegendo o ecossistema para as futuras gerações.'
  },
  {
    titulo: 'Valorização Humana',
    texto: 'Cuidar de quem cuida. Investimos no desenvolvimento técnico e humano de nossos colaboradores, promovendo um ambiente de trabalho diverso, seguro e que estimula o crescimento.'
  }
]
</script>

<style scoped>
.text-navy {
  color: #002d5f;
}

.text-primary-light {
  color: #0076a8;
  font-weight: 500;
}

.description-main {
  line-height: 1.8;
  text-align: justify;
}

/* Cards de Compromisso */
.commitment-card {
  background-color: #f8fbff;
  border-bottom: 4px solid transparent !important;
  transition: all 0.3s ease;
}

.commitment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 45, 95, 0.1) !important;
  border-bottom: 4px solid #0076a8 !important;
}

.icon-box {
  background-color: #002d5f;
  color: white;
  width: 32px;
  height: 32px;
  min-width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}

.small-text {
  line-height: 1.6;
  text-align: justify;
}

/* Logo flutuante */
.floating-logo {
  max-width: 250px;
  opacity: 0.8;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}

@media (max-width: 991px) {
  .description-main {
    text-align: center;
  }
}
</style>