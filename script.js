(function () {
  const STORAGE_KEY = "cbinnov-lang";
  const toggle = document.getElementById("lang-toggle");
  const html = document.documentElement;

  function applyLang(lang) {
    const isFr = lang === "fr";
    html.lang = isFr ? "fr" : "en";
    toggle.classList.toggle("is-fr", isFr);
    toggle.setAttribute("aria-pressed", String(isFr));

    document.querySelectorAll("[data-en]").forEach((el) => {
      const value = el.getAttribute(isFr ? "data-fr" : "data-en");
      if (value == null) return;
      if (el.tagName === "META") {
        el.setAttribute("content", value);
      } else {
        el.innerHTML = value;
      }
    });

    document.title = isFr
      ? "CBINNOV INC — Recherche et Développement"
      : "CBINNOV INC — Research & Development";
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  const browserFr = (navigator.language || "").toLowerCase().startsWith("fr");
  const initial = saved || (browserFr ? "fr" : "en");
  applyLang(initial);

  toggle.addEventListener("click", () => {
    const next = toggle.classList.contains("is-fr") ? "en" : "fr";
    localStorage.setItem(STORAGE_KEY, next);
    applyLang(next);
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
