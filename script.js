let isDark = false;

function toggleTheme() {
  const btn = document.getElementById("themeBtn");

  if (isDark) {
    btn.src = "https://img.shields.io/badge/theme-light-%E2%98%80?style=flat";
  } else {
    btn.src = "https://img.shields.io/badge/theme-dark-%F0%9F%8C%99?style=flat";
  }

  isDark = !isDark;
}
