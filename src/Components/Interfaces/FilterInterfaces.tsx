import { FilterStatuses, PriorityFilter } from "../TaskFilter/TaskFilter";

export interface filtersProps {
  setPriorityFilter: React.Dispatch<React.SetStateAction<PriorityFilter>>;
  setFilter: React.Dispatch<React.SetStateAction<FilterStatuses>>;
  filter: FilterStatuses;
  priorityFilter: PriorityFilter;
}
