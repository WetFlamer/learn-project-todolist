import React from "react";
import styles from "../../styles/Header.module.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/">Главная</a>
      <a href="#">Каталог</a>
      <a href="#">Каталог</a>
      <a href="#">Каталог</a>
      <a href="#">Каталог</a>
      <ThemeToggle/>
    </header>
  );
};

export default Header;
