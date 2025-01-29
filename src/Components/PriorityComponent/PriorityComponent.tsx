import React from "react";
import styles from "../TodoList/TodoList.module.css";
import { priorityFilterProps, Todo } from "../Interfaces/TodoInterfaces";
import { PriorityFilter } from "../TaskFilter/Filters";

export const PriorityComponent: React.FC<priorityFilterProps> = ({
  priorityValue,
  setTodos,
  todoId,
  setPriorityValue,
}) => {
  const changePriorityValue = (newPriority: string) => {
    setPriorityValue(newPriority as PriorityFilter);
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  return (
    <div className={styles.priorityWrapper}>
      <label htmlFor="priority" className={styles.priorityLabel}>
        Приоритет
      </label>
      <select
        id="priority"
        value={priorityValue}
        onChange={(e) => changePriorityValue(e.target.value)}
      >
        <option value="high">Высокий</option>
        <option value="medium">Средний</option>
        <option value="low">Низкий</option>
      </select>
    </div>
  );
};
