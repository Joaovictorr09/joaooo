
// Menu para dispositivos móveis
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  const aberto = nav.classList.contains("active");

  menuToggle.textContent = aberto ? "✕" : "☰";
  menuToggle.setAttribute(
    "aria-expanded",
    String(aberto)
  );
});

// Fechar menu após clicar em um link
document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Atualizar ano automaticamente
document.getElementById("year").textContent =
  new Date().getFullYear();

// Animação de entrada dos conteúdos
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

document.querySelectorAll(
  ".topic-card, .pillars article, .action-grid div, .reference-list a"
).forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});

