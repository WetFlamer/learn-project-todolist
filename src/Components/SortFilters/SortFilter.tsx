import React from "react";
import { SortStatuses } from "./Filters";
import styles from "../../styles/TaskFilter.module.css";

interface SortFilterProps {
  sort: SortStatuses;
  setSort: React.Dispatch<React.SetStateAction<SortStatuses>>;
}

const SortFilter: React.FC<SortFilterProps> = ({ sort, setSort }) => {
  return (
    <div className={styles.filter}>
      <label htmlFor="sort">Сортировка по:</label>
      <select
        id="sort"
        value={sort}
        onChange={(e) => setSort(e.target.value as SortStatuses)}
      >
        <option value={SortStatuses.ALL}>Все</option>
        <option value={SortStatuses.ALPHABET}>По алфавиту</option>
        <option value={SortStatuses.DATE}>По дате публикации</option>
        <option value={SortStatuses.DEADLINE}>По дедлайну</option>
        <option value={SortStatuses.COMPLETED_DATE}>По дате выполнения</option>
      </select>
    </div>
  );
};

export { SortFilter };
