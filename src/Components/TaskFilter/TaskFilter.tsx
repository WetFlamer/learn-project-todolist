import React from "react";
import { filtersProps } from "../Interfaces/FilterInterfaces";
import styles from "./TaskFilter.module.css";
import { FilterStatuses, PriorityFilter } from "./Filters";

export const TaskFilter: React.FC<filtersProps> = ({
  setFilter,
  setPriorityFilter,
  priorityFilter,
  filter,
}) => {

  return (
    <>
      <div className={styles.filtersSection}>
        <label htmlFor="filter">Сортировка по:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterStatuses)}
        >
          <option value={FilterStatuses.All}>Все</option>
          <option value={FilterStatuses.Alphabet}>По алфавиту</option>
          <option value={FilterStatuses.Date}>По дате публикации</option>
          <option value={FilterStatuses.CompletedDate}>
            По дате выполнения
          </option>
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
    </>
  );
};
