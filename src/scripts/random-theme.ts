export const initTheme = () => {
  const themes = ["brutalism", "glassmorphism", "corporate-tech"];
  const selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  document.documentElement.dataset.theme = selectedTheme;
};

// Initialize immediately to prevent flash
initTheme();
