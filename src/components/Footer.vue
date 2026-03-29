<template>
  <footer class="main-footer">
    <div class="container py-5">
      <div class="row g-5">
        
        <div class="col-lg-4 col-md-12 text-center text-lg-start">
          <img src="@/assets/logo-gp.png" alt="Grupo Pimentel" class="footer-logo mb-4">
          <p class="footer-slogan">
            Para o Grupo Pimentel, sucesso empresarial e impacto social caminham juntos. 
            Construindo um futuro mais saudável para todos.
          </p>
          <div class="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
            <a href="#" class="social-circle"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-circle"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-circle"><i class="bi bi-whatsapp"></i></a>
          </div>
        </div>

        <div class="col-lg-2 col-md-4 text-center text-md-start">
          <h5 class="footer-title">Navegação</h5>
          <ul class="footer-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/trabalhe-conosco">Trabalhe conosco</RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-4 text-center text-md-start">
          <h5 class="footer-title">Nossas Marcas</h5>
          <ul class="footer-links">
            <li><RouterLink to="/ze-do-bairro">Farmácias Zé do Bairro</RouterLink></li>
            <li><RouterLink to="/promedh">Promedh</RouterLink></li>
            <li><RouterLink to="/dpa">DPA Distribuidora</RouterLink></li>
            <li><RouterLink to="/ultra">Ultra Popular</RouterLink></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-4 text-center text-md-start">
          <h5 class="footer-title">Contato</h5>
          <div class="contact-info">
            <p class="d-flex align-items-start justify-content-center justify-content-md-start gap-2">
              <i class="bi bi-geo-alt-fill text-accent"></i>
              <span>R. Amapá, 205 - Siqueira Campos,<br>Aracaju - SE, 49075-050</span>
            </p>
            <p class="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
              <i class="bi bi-envelope-fill text-accent"></i>
              <span>contato@grupopimentelbr.com.br</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container text-center py-4">
        <hr class="footer-divider">
        <p class="mb-0 copyright-text">
          &copy; 2026 Grupo Pimentel. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background-color: #002d5f; /* Azul ainda mais profundo para o rodapé */
  color: #ffffff;
}

.footer-logo {
  height: 70px;
  filter: brightness(0) invert(1);
}

.footer-slogan {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.7;
}

.footer-title {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 25px;
  color: #00a8e8; /* Azul acento para os títulos */
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.footer-links a:hover {
  color: #00a8e8;
  padding-left: 5px; /* Efeito de deslizar sutil */
}

/* Redes Sociais */
.social-circle {
  width: 38px;
  height: 38px;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-circle:hover {
  background-color: #00a8e8;
  transform: translateY(-3px);
  color: white;
}

/* Informações de Contato */
.contact-info p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
}

.text-accent {
  color: #00a8e8;
}

.footer-divider {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.copyright-text {
  font-size: 0.85rem;
  opacity: 0.5;
}

/* Ajuste Responsivo */
@media (max-width: 768px) {
  .footer-title {
    margin-top: 20px;
  }
}
</style>