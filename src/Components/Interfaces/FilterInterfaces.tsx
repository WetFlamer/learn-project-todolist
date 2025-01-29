import { SortStatuses, PriorityFilter } from "../TaskFilter/Filters";
import { Todo } from "./TodoInterfaces";

export interface filtersProps {
  setPriorityFilter: React.Dispatch<React.SetStateAction<PriorityFilter>>;
  setFilter: React.Dispatch<React.SetStateAction<SortStatuses>>;
  filter: SortStatuses;
  todos: Todo[];
  priorityFilter: PriorityFilter;
}
