<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

// Lógica do WhatsApp
const isOpen = ref(false)
const phoneNumber = '557999621457' // Número extraído da fachada da loja
const message = 'Olá! Gostaria de mais informações sobre o Grupo Pimentel.'
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
</script>

<template>
  <div class="whatsapp-container">
    <Transition name="fade">
      <div v-if="isOpen" class="whatsapp-popup shadow-lg">
        <div class="popup-header">
          <div class="d-flex align-items-center gap-2">
            <div class="position-relative">
              <i class="bi bi-whatsapp fs-4"></i>
              <span class="online-badge"></span>
            </div>
            <div>
              <h6 class="mb-0 fw-bold">WhatsApp</h6>
              <small>Online</small>
            </div>
          </div>
          <button @click="isOpen = false" class="btn-close btn-close-white small shadow-none"></button>
        </div>
        
        <div class="popup-body p-3 text-dark bg-white">
          <div class="message-bubble sender mb-2">
            Olá, tudo bem?
          </div>
          <div class="message-bubble sender mb-3">
            Quer falar conosco via WhatsApp?
          </div>
          <a :href="whatsappUrl" target="_blank" class="btn btn-whatsapp-direct w-100 rounded-pill">
            Sim, falar agora
          </a>
        </div>
      </div>
    </Transition>

    <button @click="isOpen = !isOpen" class="btn-float-wa shadow-lg" :class="{ 'active': isOpen }">
      <i v-if="!isOpen" class="bi bi-whatsapp"></i>
      <i v-else class="bi bi-x-lg"></i>
      <span v-if="!isOpen" class="notification-dot"></span>
    </button>
  </div>
  
  <RouterView />
</template>

<style scoped>
/* Estilos do WhatsApp unificados */
.whatsapp-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 9999;
}

.btn-float-wa {
  width: 60px;
  height: 60px;
  background-color: #25d366;
  color: white;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn-float-wa.active {
  background-color: #666;
  transform: rotate(90deg);
}

.whatsapp-popup {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  transform-origin: bottom right;
}

.popup-header {
  background-color: #25d366;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
}

.message-bubble {
  background-color: #f0f0f0;
  padding: 8px 12px;
  border-radius: 0 15px 15px 15px;
  font-size: 0.9rem;
  display: block;
}

.btn-whatsapp-direct {
  background-color: #25d366;
  color: white;
  font-weight: bold;
}

.online-badge {
  width: 10px;
  height: 10px;
  background-color: #4edb64;
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border: 1px solid white;
}

.notification-dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  background-color: #ff3b30;
  border: 2px solid white;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(255, 59, 48, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(255, 59, 48, 0); }
}

.fade-enter-active, .fade-leave-active { transition: all 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px) scale(0.8); }
</style>