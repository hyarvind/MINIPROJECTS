const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;

  trailer = document.getElementById('trailer');
  function toggleTrailer()  {
    if (trailer.style.display === "none") {
        trailer.style.display = "flex";
      } else {
        trailer.style.display = "none";
      }
  }

  quality = document.getElementById('dwnld-box')
  function toggleQuality() {
    if (quality.style.display === "none") {
        quality.style.display = "flex";
      } else {
        quality.style.display = "none";
      }
  }