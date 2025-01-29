import { SortStatuses, PriorityFilter } from "../TaskFilter/Filters";
import { Todo } from "./TodoInterfaces";

export interface filtersProps {
  setPriorityFilter: React.Dispatch<React.SetStateAction<PriorityFilter>>;
  setSort: React.Dispatch<React.SetStateAction<SortStatuses>>;
  sort: SortStatuses;
  todos: Todo[];
  priorityFilter: PriorityFilter;
}
