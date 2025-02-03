import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { RootState } from "../../store/";
import styles from "../../styles/ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button
      className={`${styles.button} ${theme === "light" ? styles.light : styles.dark}`}
      onClick={() => dispatch(toggleTheme())}
    >
      <span className={styles.icon}>
        {theme === "light" ? "🌙" : "☀️"}
      </span>
      {theme === "light" ? "Тёмная тема" : "Светлая тема"}
    </button>
  );
};

export default ThemeToggle;
