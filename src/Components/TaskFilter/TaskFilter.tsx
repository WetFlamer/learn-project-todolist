import React from "react";
import { filtersProps } from "../Interfaces/FilterInterfaces";
import styles from './TaskFilter.module.css'

export const TaskFilter: React.FC<filtersProps> = ({ setFilter, setPriorityFilter, priorityFilter, filter }) => {
  return (
    <div className={styles.filtersSection}>
      <label htmlFor="filter">Фильтр задач:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value as FilterStatuses)}
      >
        <option value={FilterStatuses.All}>Все</option>
        <option value={FilterStatuses.Completed}>Выполненные</option>
        <option value={FilterStatuses.NotCompleted}>Невыполненные</option>
      </select>
      <label htmlFor="priorityFilter">Приоритет:</label>
      <select
        id="priorityFilter"
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value as PriorityFilter)}
      >
        <option value={PriorityFilter.High}>Высокий</option>
        <option value={PriorityFilter.Medium}>Средний</option>
        <option value={PriorityFilter.Low}>Низкий</option>
      </select>
    </div>
  );
};

export enum FilterStatuses {
  All = "all",
  Completed = "completed",
  NotCompleted = "notCompleted",
}
export enum PriorityFilter {
  High = "high",
  Medium = "medium",
  Low = "low",
}
