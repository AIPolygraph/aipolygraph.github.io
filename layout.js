<script>
// layout.js

// Завантажити компонент в контейнер з вказаним ID
function loadComponent(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = data;
      }
    })
    .catch(err => console.error(`Помилка завантаження ${url}:`, err));
}

// Підсвітити активний пункт меню
function highlightActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

// Головне завантаження після DOM
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("lang-switch", "lang-switch.html");
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");

  // Затримка, щоб дочекатися вставки header
  setTimeout(highlightActiveMenu, 100); // 100 мс
});
// Бургер-кнопка
function toggleMenu() {
  const menu = document.getElementById("main-nav");
  menu.classList.toggle("show");
}
</script>
