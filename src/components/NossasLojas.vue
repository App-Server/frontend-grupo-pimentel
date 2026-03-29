<template>
  <section class="unidades-section py-5" style="background-color: #fcfcfc;">
    <div class="container">
      <div class="text-center mb-5">
        <h2 class="fw-bold display-6" style="color: #DB4040;">Nossas Unidades</h2>
        <p class="text-muted">Clique no endereço ou no botão de rotas para navegar até a loja.</p>
      </div>

      <div class="row g-4">
        <div v-for="(loja, index) in unidades" :key="index" class="col-md-6 col-lg-4">
          <div class="card h-100 border-0 shadow-sm rounded-4 loja-card">
            <div class="card-body p-4 d-flex flex-column">
              
              <div class="mb-3">
                <span class="badge" :class="getStatusClass(loja.status)">
                  {{ loja.status }}
                </span>
              </div>

              <h5 class="fw-bold mb-2" style="color: #333;">{{ loja.nome }}</h5>
              
              <a :href="'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Farmácias Zé do Bairro ' + loja.endereco)" 
                 target="_blank" 
                 class="address-link mb-3 text-decoration-none text-muted small">
                <i class="bi bi-geo-alt-fill text-danger me-1"></i>
                {{ loja.endereco }}
              </a>

              

              <div class="d-flex gap-2">
                <a :href="'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(loja.endereco)" 
                  target="_blank" 
                  class="btn btn-danger btn-sm rounded-pill px-4 fw-bold">
                  Rotas
                </a>

                <a href="https://api.whatsapp.com/send/?phone=557999621457&text=Olá!+Vi+a+unidade+no+site+e+gostaria+de+falar+com+o+Televendas." 
                  target="_blank" 
                  class="btn btn-outline-dark btn-sm rounded-pill px-4">
                  Televendas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const unidades = [
  { nome: "Zé do Bairro - Bugio", endereco: "Av. Poço do Mero, 120A", telefone: "(79) 3217-2413", status: "Aberto · Fecha 22:00", comentario: "É muito bonito e elegante!!!", bairro: "Bugio" },
  { nome: "Zé do Bairro - Santos Dumont", endereco: "Av. Maria Fonseca de Moraes, 258", telefone: "(79) 3217-2413", status: "Fecha às 21:00", comentario: "Excelente atendimento, estão de parabéns 👏", bairro: "Santos Dumont" },
  { nome: "Zé do Bairro - Coqueiral", endereco: "R. São Francisco de Assis, 1103", telefone: "(79) 3217-2413", status: "Fecha às 21:00", comentario: "Bons preços!", bairro: "Coqueiral" },
  { nome: "Zé do Bairro - Siqueira Campos", endereco: "R. Santa Catarina, 454", telefone: "(79) 3217-2413", status: "Aberto · Fecha 23:00", comentario: "Preço e atendimento nota 10.", bairro: "Siqueira Campos" },
  { nome: "Zé do Bairro - Hermes Fontes", endereco: "Av. Hermes Fontes, 1707", telefone: "(79) 99962-1457", status: "Aberto 24 horas", comentario: "Tem amplo estacionamento.", bairro: "Luzia" },
  { nome: "Zé do Bairro - Socorro (Centro)", endereco: "Nossa Sra. do Socorro - SE", telefone: "(79) 3217-2413", status: "Aberto · Fecha 22:00", comentario: "Preços excelente, atendimento excelente 👏👏👏👏", bairro: "Socorro" },
  { nome: "Zé do Bairro - Sol Nascente", endereco: "Av. Farmacêutica Cezartina Régis, 266", telefone: "(79) 3217-2413", status: "Aberto · Fecha 22:00", comentario: "Loja confortável, acessível;", bairro: "Jabotiana" },
  { nome: "Zé do Bairro - Socorro (Shopping)", endereco: "Nossa Sra. do Socorro - SE", telefone: "(79) 3217-2413", status: "Aberto · Fecha 22:00", comentario: "Muito educados e ótima localização", bairro: "Socorro" },
  { nome: "Zé do Bairro - Socorro (Marcos Freire)", endereco: "Nossa Sra. do Socorro - SE", telefone: "(79) 3217-2413", status: "Fecha às 21:00", comentario: "Parabéns Fcias ZE DO BAIRRO.", bairro: "Marcos Freire" },
  { nome: "Zé do Bairro - Santa Maria", endereco: "Av. Alexandre Alcino, 1200", telefone: "(79) 3217-2413", status: "Aberto · Fecha 22:00", comentario: "Balconista espetaculares diferenciado", bairro: "Santa Maria" },
  { nome: "Zé do Bairro - Atalaia", endereco: "Av. Mario Jorge Menezes Viêira, 59 - Loja 1", telefone: "(79) 3217-2413", status: "Aberto · Fecha 01:00", comentario: "Equipe nota 1000", bairro: "Atalaia" },
  { nome: "Zé do Bairro - Aeroporto", endereco: "Av. Antônio Alves, 628", telefone: "(79) 3217-2413", status: "Aberto · Fecha 22:00", comentario: "Merecem as 5 estrelas!", bairro: "Aeroporto" },
  { nome: "Zé do Bairro - Inácio Barbosa", endereco: "Av. Josino José de Almeida, 255", telefone: "(79) 99847-9523", status: "Fecha às 21:00", comentario: "Preços mais convidativos", bairro: "Inácio Barbosa" },
  { nome: "Zé do Bairro - Barra", endereco: "Barra dos Coqueiros - SE", telefone: "(79) 3217-2413", status: "Fecha às 21:00", comentario: "O melhor preço da barra", bairro: "Barra" },
  { nome: "Zé do Bairro - Aruana", endereco: "R. Maria Vasconcelos de Andrade, 26 - Loja 01", telefone: "(79) 99962-1457", status: "Fecha às 21:00", comentario: "Loja ampla , com ótima localização.", bairro: "Aruana" },
  { nome: "Zé do Bairro - Centro (Coelho)", endereco: "Av. Coelho e Campos, 58 - Sala 08", telefone: "(79) 3217-2413", status: "Fechado · Abre 06:00", comentario: "Ótima para entregas no centro.", bairro: "Centro" },
  { nome: "Zé do Bairro - Industrial", endereco: "Av. José Conrado de Araújo, 102", telefone: "(79) 98826-0017", status: "Aberto · Fecha 22:00", comentario: "A melhor no Bairro industrial.", bairro: "Industrial" },
  { nome: "Zé do Bairro - Centro (Valadão)", endereco: "Praça Gen. Valadão, 395", telefone: "(79) 3217-2413", status: "Fechado · Abre 07:00", comentario: "Atendimento excelente, preço baixo", bairro: "Centro" },
  { nome: "Zé do Bairro - Barão de Maruim", endereco: "Av. Barão de Maruim, 501", telefone: "(79) 3217-2413", status: "Fechado · Abre 06:00", comentario: "Super recomendo.", bairro: "Centro" },
  { nome: "Zé do Bairro - Getúlio Vargas", endereco: "R. Prof. Florentino Menezes, 282", telefone: "(79) 3217-2413", status: "Fechado · Abre 07:00", comentario: "Preços acessíveis.", bairro: "Getúlio Vargas" }
];

const getStatusClass = (status) => {
  if (status.includes('Aberto')) return 'bg-success-subtle text-success border border-success';
  if (status.includes('Fechado')) return 'bg-danger-subtle text-danger border border-danger';
  return 'bg-warning-subtle text-warning-emphasis border border-warning';
};
</script>

<style scoped>
.loja-card {
  transition: all 0.3s ease;
  border: 1px solid #eee !important;
}
.loja-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.08) !important;
  border-color: #DB4040 !important;
}
.address-link {
  display: block;
  transition: color 0.2s;
}
.address-link:hover {
  color: #DB4040 !important;
}
.comment-box {
  background: #fdfdfd;
  padding: 10px;
  border-radius: 8px;
  border-left: 3px solid #DB4040;
}
.badge {
  font-size: 0.75rem;
  padding: 5px 12px;
}
</style>