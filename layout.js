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
    })
    .catch(err => console.error(`Помилка завантаження ${url}:`, err));
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

  if (isEnglish) {
    if (enLink) enLink.classList.add("active");
  } else {
    if (uaLink) uaLink.classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const isEnglish = window.location.pathname.includes("-en");
  const headerFile = isEnglish ? "header-en.html" : "header.html";

  loadComponent("lang-switch", "lang-switch.html");
  loadComponent("header", headerFile);
  loadComponent("footer", "footer.html");
});
