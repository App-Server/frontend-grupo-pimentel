<template>
  <section id="empresas" class="excelencia-section py-5 text-white">
    <div class="container py-lg-5">
      
      <div class="text-center mb-5">
        <h2 class="fw-bold mb-3">Nossas Unidades de Negócio</h2>
        <div class="divider mx-auto mb-5"></div>
      </div>

      <div class="row g-4 justify-content-center">
        <div v-for="(empresa, index) in empresas" :key="index" class="col-6 col-md-4 col-lg-3">
          <div class="company-card h-100 border-0 rounded-4 p-3 bg-white shadow-lg">
            
            <div class="image-wrapper rounded-4 mb-3">
              <img :src="empresa.imagem" :alt="'Empresa ' + empresa.nome" class="img-fluid w-100 company-image">
            </div>

            <div class="card-body text-center p-0">
              <h5 class="fw-bold text-navy mb-2">{{ empresa.nome }}</h5>
              <p class="text-muted small mb-0">{{ empresa.tipo }}</p>
              
              <a href="#" class="btn btn-sm text-navy mt-2 rounded-5 btn-see-more">
                <i class="bi bi-plus-lg"></i>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Imagens representativas buscadas na internet
const empresas = [
  { 
    nome: 'Promédh', 
    tipo: 'Distribuidora Hospitalar',
    imagem: 'https://promedhdistribuidora.com.br/wp-content/uploads/2024/03/WhatsApp-Image-2024-02-22-at-15.37.38-1-e1708999421478-1024x839-1-e1710449471284.jpeg' // Interior de laboratório/farmácia
  },
  { 
    nome: 'DPA', 
    tipo: 'Distribuidora de Medicamentos',
    imagem: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=600&auto=format&fit=crop' // Caixas em armazém
  },
  { 
    nome: 'Zé do Bairro', 
    tipo: 'Farmácia de Varejo',
    imagem: 'https://lh3.googleusercontent.com/p/AF1QipPNc1Sv5w-QE-e4Qs-BL_W5teEWzuEYr03qy2n2=s680-w680-h510-rw' // Prateleiras de farmácia
  },
  { 
    nome: 'Ultra Popular', 
    tipo: 'Drogaria',
    imagem: 'https://www.paradadez.com.br/guiacomercial/imgs/fotos/drogarias-ultra-popular-002.jpg' // Fachada de drogaria moderna
  },
]
</script>

<style scoped>
.excelencia-section {
  background-color: #0076a8;
}

.divider {
  width: 100px;
  height: 5px;
  background-color: #002d5f;
  border-radius: 2px;
}

.company-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 1rem;
}

.company-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.image-wrapper {
  aspect-ratio: 1/1; /* Imagens quadradas nos cards */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.company-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.text-navy {
  color: #002d5f;
}

.btn-see-more {
  border: 1px solid #002d5f;
  background-color: transparent;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #002d5f;
  opacity: 0.8;
}

.btn-see-more:hover {
  background-color: #002d5f;
  color: white;
  opacity: 1;
}
</style>