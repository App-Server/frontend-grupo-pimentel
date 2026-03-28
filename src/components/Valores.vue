<template>
  <section class="valores-section py-5 bg-light">
    <div class="container py-lg-5">
      
      <div class="text-center mb-5">
        <h2 class="fw-bold text-navy mb-3">VALORES DA MARCA</h2>
        <div class="divider mx-auto"></div>
      </div>

      <div class="row align-items-center g-5">
        <div class="col-lg-7">
          <div class="description-box pe-lg-4">
            <p class="lead-text mb-4">
              No <strong>Grupo Pimentel</strong>, acreditamos nos valores de Deus, família, lealdade, ética e caráter, todos os dias em que saímos de nossas casas.
            </p>
            <p class="text-muted text-justify">
              Nós trabalhamos para atender os nossos clientes com o mix de produtos mais completo, levando a nossa melhor proposta comercial para atender sempre sua expectativa. Procuramos entregar o melhor que a nossa empresa tem a oferecer. Esse é o sentimento dos colaboradores que são comprometidos com o sucesso do Grupo.
            </p>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="row g-3">
            <div v-for="valor in valores" :key="valor" class="col-12">
              <div class="valor-card d-flex align-items-center p-3 shadow-sm bg-white rounded-3">
                <div class="icon-circle me-3">
                  <i class="bi bi-check2-circle text-white"></i>
                </div>
                <h4 class="mb-0 fw-bold text-navy">{{ valor }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const valores = ['Caráter', 'Lealdade', 'Trabalho', 'Família', 'Deus']
</script>

<style scoped>
.text-navy {
  color: #002d5f; /* Azul padrão do seu projeto */
}

.divider {
  width: 60px;
  height: 4px;
  background-color: #0076a8; /* Azul mais claro dos cards */
  border-radius: 2px;
}

.lead-text {
  font-size: 1.25rem;
  color: #333;
  line-height: 1.6;
}

.text-justify {
  text-align: justify;
  line-height: 1.8;
}

/* Estilo dos Cards de Valores */
.valor-card {
  border-left: 5px solid #002d5f;
  transition: all 0.3s ease;
}

.valor-card:hover {
  transform: translateX(10px);
  background-color: #f8f9fa;
}

.icon-circle {
  background-color: #002d5f;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

@media (max-width: 991px) {
  .description-box {
    text-align: center;
    margin-bottom: 2rem;
  }
}
</style>