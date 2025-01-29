import React from "react";
import { filtersProps } from "../Interfaces/FilterInterfaces";
import styles from "./TaskFilter.module.css";
import { SortStatuses, PriorityFilter } from "./Filters";

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
          onChange={(e) => setFilter(e.target.value as SortStatuses)}
        >
          <option value={SortStatuses.ALL}>Все</option>
          <option value={SortStatuses.ALPHABET}>По алфавиту</option>
          <option value={SortStatuses.DATE}>По дате публикации</option>
          <option value={SortStatuses.COMPLETED_DATE}>
            По дате выполнения
          </option>
          <option value={SortStatuses.COMPLETED}>Выполненные</option>
          <option value={SortStatuses.NOT_COMPLETED}>Невыполненные</option>
        </select>
        <label htmlFor="priorityFilter">Приоритет:</label>
        <select
          id="priorityFilter"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value as PriorityFilter)}
        >
          <option value={SortStatuses.ALL}>Все</option>
          <option value={PriorityFilter.HIGH}>Высокий</option>
          <option value={PriorityFilter.MEDIUM}>Средний</option>
          <option value={PriorityFilter.LOW}>Низкий</option>
        </select>
      </div>
    </>
  );
};
