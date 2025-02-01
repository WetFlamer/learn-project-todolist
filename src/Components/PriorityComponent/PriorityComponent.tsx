import React from "react";
import styles from "../styles/TodoList.module.css";
import { priorityFilterProps, Todo } from "../Interfaces/TodoInterfaces";
import { PriorityFilter } from "../SortFilters/Filters";

export const PriorityComponent: React.FC<priorityFilterProps> = ({
  todoId,
  todoPriority,
  setTodos,
}) => {
  const changePriorityValue = (newPriority: string) => {
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
        value={todoPriority}
        onChange={(e) => changePriorityValue(e.target.value)}
      >
        <option value={PriorityFilter.HIGH}>Высокий</option>
        <option value={PriorityFilter.MEDIUM}>Средний</option>
        <option value={PriorityFilter.LOW}>Низкий</option>
      </select>
    </div>
  );
};
