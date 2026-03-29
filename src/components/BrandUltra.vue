<template>
  <section class="store-section">
    <div class="container">
      <h2 class="section-title">Nossas Unidades</h2>
      
      <div class="cards-container">
        <div v-for="store in stores" :key="store.address" class="store-card">

          <div class="image-wrapper">
            <img 
              :src="store.imagem || 'https://via.placeholder.com/400x250?text=Farmácia'" 
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
    imagem: "https://lh3.googleusercontent.com/p/AF1QipNu6n5joTung9OOPDL82AjJ89bxHCFQ2omQ9sYI=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "Av Doutor José Thomas D'Ávila Nabuco, 745",
    bairro: "Farolândia",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Drogarias+Ultra+Popular+Av+Doutor+Jose+Thomas+745"
  },
  {
    imagem: "https://lh3.googleusercontent.com/p/AF1QipNu6n5joTung9OOPDL82AjJ89bxHCFQ2omQ9sYI=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "R. G, 17",
    bairro: "Aruana",
    googleMaps: "https://www.google.com/maps/search/?api=1&query=Drogarias+Ultra+Popular+Rua+G+17"
  },
  {
    imagem: "https://lh3.googleusercontent.com/p/AF1QipNu6n5joTung9OOPDL82AjJ89bxHCFQ2omQ9sYI=s680-w680-h510-rw",
    name: "Drogarias Ultra Popular",
    category: "Farmácia",
    address: "-",
    bairro: "EM BREVE",
    googleMaps: ""
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