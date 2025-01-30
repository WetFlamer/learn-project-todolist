import React from "react";
import { SortFilter } from "./SortFilter";
import { ProcessFilterComponent } from "./ProcessFilter";
import { PriorityFilterComponent } from "./PriorityFilter";
import { SortFilterProps } from "../Interfaces/FilterInterfaces";
import styles from "../styles/TaskFilter.module.css";

export const TaskFilter: React.FC<SortFilterProps> = ({
  setSort,
  setPriorityFilter,
  setProcessFilterValue,
  processFilterValue,
  priorityFilter,
  sort,
}) => {
  return (
    <div className={styles.filtersSection}>
      <SortFilter sort={sort} setSort={setSort} />
      <ProcessFilterComponent
        processFilterValue={processFilterValue}
        setProcessFilterValue={setProcessFilterValue}
      />
      <PriorityFilterComponent
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
      />
    </div>
  );
};
