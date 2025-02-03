import React from "react";
import styles from "../../styles/TodoList.module.css";

interface TaskCategoryBadgeProps {
  category: string;
}

const TaskCategoryBadge: React.FC<TaskCategoryBadgeProps> = ({ category }) => {
  if (!category) return null;

  const categoryLabels: Record<string, string> = {
    work: "Работа",
    personal: "Личное",
    study: "Учеба",
    other: "Прочее",
  };

  return (
    <span className={`${styles.categoryBadge} ${styles[category]}`}>
      {categoryLabels[category] || "Прочее"}
    </span>
  );
};

export default TaskCategoryBadge;
