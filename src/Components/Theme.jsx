import React, { useState, useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Theme = () => {
  const localStheme = localStorage.getItem("theme");
  const activeTheme = localStheme ? JSON.parse(localStheme) : "";

  const [theme, setTheme] = useState(activeTheme === "dark" ? "Light" : "Dark");

  const body = document.querySelector("body");

  const handleToggle = () => {
    if (body.classList.contains("darkTheme")) {
      body.classList.remove("darkTheme");
      setTheme("Dark");
      localStorage.setItem("theme", JSON.stringify("light"));
    } else {
      body.classList.add("darkTheme");
      setTheme("Light");
      localStorage.setItem("theme", JSON.stringify("dark"));
    }
  };

  useEffect(() => {
    if (activeTheme === "dark") {
      body.classList.add("darkTheme");
    }
  }, [theme]);

  return (
    <button
      onClick={handleToggle}
      style={{ background: "transparent", border: "none" }}
    >
      {theme === "Light" ? (
        <MdDarkMode size={20} cursor="pointer" />
      ) : (
        <MdLightMode
          size={20}
          color={"var( --main-navbar-font-color)"}
          cursor="pointer"
        />
      )}
    </button>
  );
};

export default Theme;
