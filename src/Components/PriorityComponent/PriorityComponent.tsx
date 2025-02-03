import React from "react";
import styles from "../styles/TodoList.module.css";
import { priorityFilterProps } from "../Interfaces/TodoInterfaces";
import { PriorityFilter } from "../SortFilters/Filters";
import { useDispatch } from "react-redux";
import {changePriorityValue} from '../../store/todoSlice'
export const PriorityComponent: React.FC<priorityFilterProps> = ({
  todoId,
  todoPriority,
}) => {

  const dispatch = useDispatch()
  const changePriority = (newPriority: string) =>  dispatch(
          changePriorityValue({
            id: todoId,
            priority: newPriority,
          
          })
        );
  return (
    <div className={styles.priorityWrapper}>
      <label htmlFor="priority" className={styles.priorityLabel}>
        Приоритет
      </label>
      <select
        id="priority"
        value={todoPriority}
        onChange={(e) => changePriority(e.target.value)}
      >
        <option value={PriorityFilter.HIGH}>Высокий</option>
        <option value={PriorityFilter.MEDIUM}>Средний</option>
        <option value={PriorityFilter.LOW}>Низкий</option>
      </select>
    </div>
  );
};
