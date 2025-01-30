import React from "react";
import styles from "../styles/TodoList.module.css";

interface TaskCompletedTimeProps {
  completed: boolean;
  completeDate: number;
}

const TaskCompletedTime: React.FC<TaskCompletedTimeProps> = ({ completed, completeDate }) => {
  if (!completed) return null;

  return (
    <p className={styles.completedTime}>
      Выполнено: {new Date(completeDate).toLocaleString()}
    </p>
  );
};

export default TaskCompletedTime;
