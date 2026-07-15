<template>
  <section class="servicos-section py-5" style="background-color: #fcfcfc;">
    <div class="container">
      <!-- Cabeçalho Principal -->
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6" style="color: #DB4040;">Serviços & Testes Rápidos</h2>
        <p class="text-muted">
          Cuidado e saúde perto de você. Agende seu atendimento ou venha até o nosso consultório farmacêutico!
        </p>
      </div>

      <!-- Seção 1: Consultório Farmacêutico / Testes Rápidos -->
      <div class="mb-5">
        <h3 class="fw-bold fs-4 mb-4 text-dark d-flex align-items-center">
          <i class="bi bi-heart-pulse-fill me-2" style="color: #DB4040;"></i>
          Consultório Farmacêutico (Testes Rápidos)
        </h3>
        
        <div class="row g-4">
          <div v-for="(teste, index) in testesRapidos" :key="'teste-' + index" class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm rounded-4 servico-card">
              <div class="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <div class="icon-wrapper mb-3 d-flex align-items-center justify-content-center rounded-circle">
                    <i class="bi fs-4" :class="teste.icon" style="color: #DB4040;"></i>
                  </div>
                  <h5 class="fw-bold mb-2" style="color: #333;">{{ teste.nome }}</h5>
                  <p class="text-muted small mb-4">{{ teste.descricao }}</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="my-5" style="border-color: #eee; opacity: 1;">

      <!-- Seção 2: Serviços Farmacêuticos Gerais -->
      <div>
        <h3 class="fw-bold fs-4 mb-4 text-dark d-flex align-items-center">
          <i class="bi bi-clipboard2-pulse-fill me-2" style="color: #333;"></i>
          Serviços Farmacêuticos
        </h3>

        <div class="row g-4">
          <div v-for="(servico, index) in servicosGerais" :key="'servico-' + index" class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm rounded-4 servico-card">
              <div class="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <div class="icon-wrapper mb-3 d-flex align-items-center justify-content-center rounded-circle dark-icon">
                    <i class="bi fs-4" :class="servico.icon" style="color: #333;"></i>
                  </div>
                  <h5 class="fw-bold mb-2" style="color: #333;">{{ servico.nome }}</h5>
                  <p class="text-muted small mb-4">{{ servico.descricao }}</p>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Listagem dos Testes Rápidos baseada no seu consultório farmacêutico
const testesRapidos = [
  { nome: "Câncer de Próstata (PSA)", descricao: "Triagem rápida realizada através de coleta de sangue na ponta do dedo para avaliação do antígeno prostático.", icon: "bi-shield-check" },
  { nome: "Perfil de Colesterol", descricao: "Acompanhamento rápido das taxas de colesterol para prevenção e cuidado com a saúde do seu coração.", icon: "bi-activity" },
  { nome: "Hepatite C (HCV)", descricao: "Teste rápido, sigiloso e seguro para detecção qualitativa de anticorpos contra o vírus da Hepatite C.", icon: "bi-droplet-half" },
  { nome: "HIV (AIDS)", descricao: "Aconselhamento e teste rápido para detecção de anticorpos ao vírus HIV de forma privativa e humanizada.", icon: "bi-bandaid" },
  { nome: "Beta HCG", descricao: "Teste rápido de gravidez por via sanguínea com resultado rápido, discreto e altamente confiável.", icon: "bi-gender-female" },
  { nome: "Sífilis", descricao: "Exame laboratorial remoto de triagem para a detecção da infecção de forma rápida e segura.", icon: "bi-clipboard2-check" },
  { nome: "Dengue", descricao: "Auxílio no diagnóstico rápido de Dengue (antígeno ou anticorpos) para início imediato dos cuidados.", icon: "bi-bug" }
];

// Listagem dos Serviços Gerais da farmácia
const servicosGerais = [
  { nome: "Aplicação de Injetáveis", descricao: "Administração de medicamentos injetáveis prescritos com toda a segurança e técnica profissional.", icon: "bi-capsule" },
  { nome: "Perfuração de Orelha", descricao: "Colocação de brincos de forma rápida, segura, higiênica e silenciosa (sistema de aplicação moderno).", icon: "bi-gem" },
  { nome: "Medição de Glicemia", descricao: "Acompanhamento e controle dos níveis de açúcar no sangue para prevenção e controle do diabetes.", icon: "bi-speedometer2" },
  { nome: "Aferição de Pressão", descricao: "Monitoramento e controle preventivo da pressão arterial realizado pelos nossos farmacêuticos.", icon: "bi-heart-pulse" }
];

// Gera o link dinâmico para o WhatsApp com base no serviço escolhido
const getWhatsappLink = (servico) => {
  const fone = "557999621457"; // Mantendo o mesmo telefone padrão do seu outro componente
  const mensagem = `Olá! Gostaria de obter mais informações e agendar o serviço de: *${servico}* na Farmácia Zé do Bairro.`;
  return `https://api.whatsapp.com/send/?phone=${fone}&text=${encodeURIComponent(mensagem)}`;
};
</script>

<style scoped>
/* Efeito de Card idêntico ao das Unidades */
.servico-card {
  transition: all 0.3s ease;
  border: 1px solid #eee !important;
}

.servico-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
  border-color: #DB4040 !important;
}

/* Estilo para os ícones circulares */
.icon-wrapper {
  width: 50px;
  height: 50px;
  background-color: #fdeaea; /* Vermelho bem suave de fundo */
}

.dark-icon {
  background-color: #f0f0f0; /* Cinza de fundo para diferenciar os serviços gerais */
}

/* Alinhamento de botões de tamanhos consistentes */
.btn {
  font-size: 0.8rem;
  transition: all 0.2s ease;
}
</style>