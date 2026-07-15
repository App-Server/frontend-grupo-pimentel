<template>
  <section class="store-section">
    <div class="container">
      
      <h2 class="section-title">Nossas Unidades</h2>
      
      <div class="cards-container">
        <div v-for="store in stores" :key="store.address" class="store-card">

          <div class="image-wrapper">
            <img 
              :src="store.imagem || 'https://www.drogariasultrapopular.com.br/wp-content/themes/acfarma/assets/images/ultrapopular_celular_com_sombra.png'" 
              :alt="store.name" 
              class="company-image"
            >
          </div>
          
          <div class="card-content">
            <span class="category">{{ store.category }}</span>
            <h3>{{ store.name }}</h3>
            
            <div class="card-body">
              <p><strong>Endereço:</strong><br>{{ store.address }}</p>
              <strong>{{ store.bairro }}</strong>
            </div>
          </div>

          <div class="card-footer">
            <a :href="store.googleMaps" target="_blank" rel="noopener noreferrer" class="btn-route">
              Ver no Google Maps
            </a>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stores = [
  {
    imagem: "https://lh3.googleusercontent.com/p/AF1QipNu6n5joTung9OOPDL82AjJ89bxHCFQ2omQ9sYI=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "Nossa Sra. do Socorro - SE",
    bairro: "João Alves",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Drogarias+Ultra+Popular+Nossa+Sra+do+Socorro" 
  },
  {
    imagem: "https://lh3.googleusercontent.com/p/AF1QipNu6n5joTung9OOPDL82AjJ89bxHCFQ2omQ9sYI=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "Av. Francisco Porto, 151",
    bairro: "Jardins",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Drogarias+Ultra+Popular+Av+Francisco+Porto+151"
  },
  {
    imagem: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWle2zNeRqgSH1t-bery-nBCU3TPIsk3o2ekNS6r-hLPt-zCTbrbTFANxgQ1V3LBKQ_V0FgjKSGYaFQKb7pxi136zM8Zb96uc93GqZ6E4qC3KhQ5XcoAFr2GtGU9wMrqmBxFlBkrzh6v8j85=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "Av Doutor José Thomas D'Ávila Nabuco, 745",
    bairro: "Farolândia",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Drogarias+Ultra+Popular+Av+Doutor+Jose+Thomas+745"
  },
  {
    imagem: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWng2QH9GWof4V6pNToMM6-WaEAI9dTxvBEgjV8-Ou0Q2fhWboxFdbY1PjkBR-j1pg5FPk9kPozwmntvQCROyJ0fiRFX8eKULhoEhTDrogKKqER0YGRcgSgAr6ujp803BsCGS6yTZw=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "R. G, 17",
    bairro: "Aruana",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Drogarias+Ultra+Popular+Rua+G+17"
  },
  {
    imagem: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm20jSeXbU54QfDqoP3tI_pWwLU6ZRNhQP0MZ0RXN1-G5hGubcx5YZYFLnJkW_Je0vnnwMGT17DRxv5-ZAlm99Iupgd1QvAXXYHPjO6SCYPrtnsoMHWy-EMGFC4EMitBgyOeEW8nNfDkEHb=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "Av. Gen. Antônio Sebastião Basílio Pirro, 835 - Centro, ",
    bairro: "Barra dos Coqueiros",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Drogarias+Ultra+Popular,+Av+Oce%C3%A2nica,+14+-+Prisco+Viana,+Barra+dos+Coqueiros+-+SE,+49140-096"
  }
];
</script>

<style scoped>
.store-section {
  padding: 60px 20px;
  background-color: #f4f4f4;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  color: #e30613;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: 800;
  text-transform: uppercase;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.store-card {
  background: #fff;
  border-radius: 16px; /* Bordas mais arredondadas para um look moderno */
  overflow: hidden; /* Garante que a imagem não saia do card */
  border-top: 6px solid #ffc600; 
  box-shadow: 0 6px 15px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.store-card:hover {
  transform: translateY(-8px);
}

/* Container da Imagem */
.image-wrapper {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.company-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta a foto sem esticar */
  transition: transform 0.5s ease;
}

.store-card:hover .company-image {
  transform: scale(1.1); /* Efeito de zoom na foto ao passar o mouse */
}

.card-content {
  padding: 20px;
  flex-grow: 1;
}

.category {
  font-size: 0.7rem;
  color: #888;
  text-transform: uppercase;
  font-weight: 700;
}

.store-card h3 {
  color: #e30613;
  margin: 5px 0 15px 0;
  font-size: 1.15rem;
}

.card-body p {
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 10px;
}

.status-badge {
  color: #28a745;
  font-weight: bold;
  font-size: 0.8rem;
}

.card-footer {
  padding: 0 20px 20px 20px;
}

.btn-route {
  display: block;
  text-align: center;
  background-color: #e30613;
  color: white;
  text-decoration: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-route:hover {
  background-color: #b3050f;
}
</style>