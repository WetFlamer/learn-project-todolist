import React from "react";
import { IconType } from "react-icons";
import styles from '../../styles/TodoList.module.css';

interface ButtonProps {
  text?: string;
  icon?: IconType;
  onClick?: () => void;
  variant?: "icon" | "default";
}

const Button: React.FC<ButtonProps> = ({ text, icon: Icon, onClick, variant = "default" }) => {
  return (
    <button
      className={variant === "icon" ? styles.iconButton : styles.defaultButton}
      onClick={onClick}
    >
      {Icon && <Icon size={20} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
