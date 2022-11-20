import React, { useEffect, useState } from "react";
import './DrakMode.css';
const getTheme = () => {
  const theme = localStorage.getItem("theme") || "dark";
  return theme === "dark" ? true : false;
};

const DarkModeTogge = () => {
    const [isDarkMode, setIsDarkMode] = useState(getTheme());
	
	useEffect(() => {
		document.documentElement.className = `${isDarkMode && 'dark'}`;
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
	}, [isDarkMode])
  return (
    <div
      className="btn-theme-wrap"
      checked={isDarkMode}
      onChange={(e) => setIsDarkMode(e.target.checked)}
    >
      <i class="bi bi-moon"></i>
    </div>
  );
};

export default DarkModeTogge
