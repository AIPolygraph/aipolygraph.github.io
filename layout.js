<script>
// layout.js

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

document.addEventListener("DOMContentLoaded", () => {
  // Попередні компоненти
  loadComponent("lang-switch", "lang-switch.html");
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");

  // Затримка, щоб дочекатись вставки header
  setTimeout(highlightActiveMenu, 100); // 100 мс
});

</script>
