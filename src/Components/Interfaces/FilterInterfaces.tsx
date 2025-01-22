import { FilterStatuses, PriorityFilter } from "../TaskFilter/Filters";
import { Todo } from "./TodoInterfaces";

export interface filtersProps {
  setPriorityFilter: React.Dispatch<React.SetStateAction<PriorityFilter>>;
  setFilter: React.Dispatch<React.SetStateAction<FilterStatuses>>;
  filter: FilterStatuses;
  todos: Todo[];
  priorityFilter: PriorityFilter;
}
