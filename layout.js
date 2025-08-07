// layout.js

function loadComponent(id, url) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      const container = document.getElementById(id);
      if (container) {
        container.innerHTML = data;
        if (id === "lang-switch") setupLangSwitcher(); // виклик лише після вставки
      }
    });
}

function setupLangSwitcher() {
  const current = window.location.pathname.split("/").pop(); // напр. demo-en.html
  const isEnglish = current.includes("-en");

  const uaVersion = current.replace("-en", "");
  const enVersion = current.includes(".html")
    ? current.replace(".html", "-en.html")
    : current + "-en.html";

  const uaLink = document.getElementById("lang-ua");
  const enLink = document.getElementById("lang-en");

  if (uaLink) uaLink.href = uaVersion;
  if (enLink) enLink.href = enVersion;
}



document.addEventListener("DOMContentLoaded", () => {
  loadComponent("lang-switch", "lang-switch.html");
  loadComponent("header", "header.html");
  loadComponent("footer", "footer.html");
});
