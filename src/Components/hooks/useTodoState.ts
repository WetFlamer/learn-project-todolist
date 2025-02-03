import { useState } from "react";
import { SortStatuses, PriorityFilter, ProcessFilter } from "../SortFilters/Filters";

export function useTodoState() {
 
  const [sort, setSort] = useState<SortStatuses>(SortStatuses.ALL);
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(PriorityFilter.ALL);
  const [processFilterValue, setProcessFilterValue] = useState<ProcessFilter>(ProcessFilter.ALL);

  return {
    sort,
    setSort,
    priorityFilter,
    setPriorityFilter,
    processFilterValue,
    setProcessFilterValue,
  };
}
