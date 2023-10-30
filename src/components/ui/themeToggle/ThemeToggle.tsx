import { useState } from "react";

export default function ThemeToggle() {
  const [icon, setIcon] = useState<string>("fa-solid fa-moon");
  const body = document.querySelector("body");
  enum THEME {
    dark = "dark",
    light = "light"
  }

  function setTheme(theme: THEME): void {
    body?.setAttribute("data-theme", theme);
    localStorage.setItem("selectedTheme", theme);
  }

  function setThemeIcon(theme: THEME): void {
    theme === "light" ? 
    setIcon("fa-solid fa-sun")
    :
    setIcon("fa-solid fa-moon")
  }

  function toggleTheme() {
    const theme = body?.getAttribute("data-theme");
    switch (theme) {
      case "dark": {setTheme(THEME.light); setThemeIcon(THEME.light);}
        break;
      case "light": {setTheme(THEME.dark); setThemeIcon(THEME.dark);}
    }
  }

  function getStoredTheme() {
    const userTheme = localStorage.getItem("selectedTheme");
    switch (userTheme) {
      case "dark": setTheme(THEME.dark);
        break;
      default: setTheme(THEME.light);
    }
  }
  
  getStoredTheme();

  return (
    <button 
    className="theme-toggle-button" 
    onClick={ () => toggleTheme() }
    ><i className={ icon }></i>Dark Mode</button>
  )
}