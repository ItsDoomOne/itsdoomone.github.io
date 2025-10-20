const translations = {
  pt: {
    "flames-text": "bem-vindo ao site do doom",
    "about-me-title": "sobre mim",
    "about-me": "sou um programador (python, aprendendo c#), eu realmente gosto de música e sempre estou entediado",
    "likes-title": "eu gosto de:",
    "facts-title": "fatos sobre mim:",
    "links-title": "links que eu gosto de colocar na minha página mesmo que ninguém se importe, nem eu",
    "github-link": "meu github",
    "my-music-blog": "meu blog de música",
    "modrinth-link": "meu modrinth",
    "youtube-link": "canal do youtube",
    "lf1": "eu uso linux desde meus 8 anos",
    "lf2": "eu sempre estou entediado",
    "lf3": "católico",
    "lf4": "sou do brasil",
    "lf5": "meu maior medo é o futuro",
    "il1": "💾 linux (eu uso arch)",
    "il2": "🎮 minecraft",
    "il3": "🎵 jamiroquai, tally hall e femtanyl",
    "il4": "📺 dexter",
    "il5": "💾 commodore 64, commodore amiga, 486s e MS-DOS",
    "lt": "eu provavelmente estou reinstalando o linux agora",
    "tog": "jogos que eu estou desenvolvendo"
  }
};

const originalText = {};

window.addEventListener("DOMContentLoaded", () => {
  const ids = Object.keys(translations.pt);
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) originalText[id] = el.textContent;
  });

  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => switchLanguage(btn.dataset.lang));
  });
});

function switchLanguage(lang) {
  const isEnglish = lang === "en";
  const source = isEnglish ? originalText : translations.pt;

  Object.keys(source).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = source[id];
  });

  document.querySelector("[data-lang='en']").classList.toggle("selected", isEnglish);
  document.querySelector("[data-lang='en']").classList.toggle("unselected", !isEnglish);
  document.querySelector("[data-lang='pt']").classList.toggle("selected", !isEnglish);
  document.querySelector("[data-lang='pt']").classList.toggle("unselected", isEnglish);
}
