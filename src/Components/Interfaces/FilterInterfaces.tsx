import { SortStatuses, PriorityFilter, ProcessFilter } from "../SortFilters/Filters";

export interface SortFilterProps {
  setPriorityFilter: React.Dispatch<React.SetStateAction<PriorityFilter>>;
  setSort: React.Dispatch<React.SetStateAction<SortStatuses>>;
  setProcessFilterValue: React.Dispatch<React.SetStateAction<ProcessFilter>>;
  sort: SortStatuses;
  processFilterValue: ProcessFilter,
  priorityFilter: PriorityFilter;
}
