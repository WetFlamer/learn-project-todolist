import React from "react";
import { ProcessFilter } from "./Filters";
import styles from "../styles/TaskFilter.module.css";

interface ProcessFilterProps {
  processFilterValue: ProcessFilter;
  setProcessFilterValue: React.Dispatch<React.SetStateAction<ProcessFilter>>;
}

const ProcessFilterComponent: React.FC<ProcessFilterProps> = ({
  processFilterValue,
  setProcessFilterValue,
}) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="processFilter">Процесс:</label>
      <select
        id="processFilter"
        value={processFilterValue}
        onChange={(e) => setProcessFilterValue(e.target.value as ProcessFilter)}
      >
        <option value={ProcessFilter.ALL}>Все</option>
        <option value={ProcessFilter.COMPLETED}>Выполненные</option>
        <option value={ProcessFilter.NOT_COMPLETED}>Невыполненные</option>
      </select>
    </div>
  );
};

export { ProcessFilterComponent };
