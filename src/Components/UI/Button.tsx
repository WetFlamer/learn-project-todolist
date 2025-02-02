import React from "react";
import styles from '../styles/TodoList.module.css'
interface ButtonProps {
  text: string;
  type?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick,  }) => {
  return (
    <button
    className={styles.defaultButton}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
