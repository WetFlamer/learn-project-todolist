import React from "react";
import styles from "../styles/TodoList.module.css";

interface TaskDeadlineProps {
  deadline: string;
}

const TaskDeadline: React.FC<TaskDeadlineProps> = ({ deadline }) => {
  if (!deadline) return null;

  const isExpired = new Date(deadline).getTime() < Date.now();

  return (
    <span className={`${styles.deadline} ${isExpired ? styles.expired : ""}`}>
      Дедлайн: {new Date(deadline).toLocaleDateString()}
    </span>
  );
};

export default TaskDeadline;
