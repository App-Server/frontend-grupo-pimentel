<template>
  <section class="about-section py-5">
    <div class="bg-glow"></div>

    <div class="container position-relative py-lg-5">
      
      <div class="row align-items-center mb-5">
        <div class="col-lg-5 mb-4 mb-lg-0">
          <h2 class="display-4 fw-bold text-white mb-0">
            Quem<br><span class="text-accent">Somos</span>
          </h2>
          <div class="accent-line mt-3"></div>
        </div>
        <div class="col-lg-7">
          <p class="about-text fs-5 lh-lg mb-0">
            O <strong>Grupo Pimentel</strong> nasceu e se consolidou no setor farmacêutico movido por cultura e valores sólidos. Hoje, representamos a união de empresas estratégicas, focadas em inovação e credibilidade, garantindo a solidez de um grupo que não para de crescer.
          </p>
        </div>
      </div>

      <hr class="my-5 opacity-25 border-light">

      <div class="text-center mb-5">
        <p class="text-uppercase tracking-widest small fw-bold text-accent mb-2">Nosso Ecossistema</p>
        <h3 class="fw-bold text-white">Empresas do Grupo</h3>
      </div>

      <div class="row g-4 justify-content-center">
        <div v-for="(empresa, index) in empresas" :key="index" class="col-6 col-md-4 col-lg-2">
          <div class="company-item">
            <div class="logo-card">
              <img :src="empresa.logo" :alt="empresa.nome" class="logo-img">
            </div>
            <div class="text-center mt-3">
              <span class="company-label">{{ empresa.nome }}</span>
            </div>
            <a :href="empresa.link" class="stretched-link"></a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import logoDPA from '@/assets/logo-dpa.png'
import logoPromedH from '@/assets/promedhloja.png'
import LogoZedobairro from '@/assets/logo-ze.png'
import logoPromedHDist from '@/assets/promedhdistribuidora.png'
import logoUltra from '@/assets/ultrapopular.png'

const empresas = [
  { nome: 'DPA', logo: logoDPA, link: '#' },
  { nome: 'PROmédH Produtos', logo: logoPromedH, link: '#' },
  { nome: 'Zé do Bairro', logo: LogoZedobairro, link: '#' },
  { nome: 'PROmédH Distribuidora', logo: logoPromedHDist, link: '#' },
  { nome: 'Ultra Popular', logo: logoUltra, link: '#' },
]
</script>

<style scoped>
/* Fundo principal com degradê profundo */
.about-section {
  background: linear-gradient(180deg, #002d5f 0%, #001a38 100%);
  position: relative;
  overflow: hidden;
  min-height: 70vh;
}

.text-accent {
  color: #00a8e8;
}

.accent-line {
  width: 60px;
  height: 4px;
  background-color: #00a8e8;
  border-radius: 2px;
}

.about-text {
  color: #d1e3f8;
  text-align: justify;
}

.tracking-widest {
  letter-spacing: 0.2em;
}

/* --- ESTILOS DOS CARDS (ONDE ESTAVA O BUG) --- */

.company-item {
  position: relative;
  transition: transform 0.3s ease;
}

.logo-card {
  background: rgba(255, 255, 255, 0.03); /* Fundo bem sutil */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.3s ease;
}

.logo-img {
  max-width: 85%;
  max-height: 55px;
  /* Importante: Começa fosco/apagado */
  filter: brightness(0) invert(1) opacity(0.4); 
  transition: all 0.3s ease;
}

.company-label {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

/* --- COMPORTAMENTO DE HOVER INDIVIDUAL --- */

.company-item:hover {
  transform: translateY(-8px);
}

.company-item:hover .logo-card {
  background: rgba(255, 255, 255, 0.1);
  border-color: #00a8e8;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.company-item:hover .logo-img {
  /* Quando o mouse entra, a logo acende 100% */
  filter: brightness(0) invert(1) opacity(1);
  transform: scale(1.05);
}

.company-item:hover .company-label {
  color: #00a8e8;
}

/* Efeito de brilho no fundo */
.bg-glow {
  position: absolute;
  top: 0;
  right: -10%;
  width: 40%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 168, 232, 0.08) 0%, transparent 70%);
  pointer-events: none;
}
</style>