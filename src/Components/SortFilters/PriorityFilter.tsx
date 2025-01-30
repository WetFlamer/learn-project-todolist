import React from "react";
import { PriorityFilter } from "./Filters";
import styles from "../styles/TaskFilter.module.css";

interface PriorityFilterProps {
  priorityFilter: PriorityFilter;
  setPriorityFilter: React.Dispatch<React.SetStateAction<PriorityFilter>>;
}

const PriorityFilterComponent: React.FC<PriorityFilterProps> = ({
  priorityFilter,
  setPriorityFilter,
}) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="priorityFilter">Приоритет:</label>
      <select
        id="priorityFilter"
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value as PriorityFilter)}
      >
        <option value={PriorityFilter.ALL}>Все</option>
        <option value={PriorityFilter.HIGH}>Высокий</option>
        <option value={PriorityFilter.MEDIUM}>Средний</option>
        <option value={PriorityFilter.LOW}>Низкий</option>
      </select>
    </div>
  );
};

export { PriorityFilterComponent };
