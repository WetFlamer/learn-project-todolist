import { SortStatuses, PriorityFilter, ProcessFilter } from "../TaskFilter/Filters";
import { Todo } from "./TodoInterfaces";

export interface SortFilterProps {
  setPriorityFilter: React.Dispatch<React.SetStateAction<PriorityFilter>>;
  setSort: React.Dispatch<React.SetStateAction<SortStatuses>>;
  setProcessFilterValue: React.Dispatch<React.SetStateAction<ProcessFilter>>;
  sort: SortStatuses;
  todos: Todo[];
  processFilterValue: ProcessFilter,
  priorityFilter: PriorityFilter;
}
