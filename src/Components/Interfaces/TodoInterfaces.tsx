import {
  SortStatuses,
  PriorityFilter,
  ProcessFilter,
} from "../SortFilters/Filters";

export interface Todo {
  date: number;
  _id: number;
  title: string;
  completed: boolean;
  priority: string;
  completeDate: number;
  category: string;
  deadline: string;
}
export interface TodoModalProps {
  editingId?: number | null;
  todo: Todo;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TodoModalAddProps {
  editingId?: number | null;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface TodoListProps {
  sort?: SortStatuses;
  processFilterValue?: ProcessFilter;
  priorityFilter?: PriorityFilter;
}
export interface priorityFilterProps {
  priorityValue: PriorityFilter;
  todoPriority: PriorityFilter;
  todoId: number;
  setPriorityValue: React.Dispatch<React.SetStateAction<PriorityFilter>>;
}
export interface TodoItemProps {
  todos: Todo[];
  todo: Todo;
  todoId: number;
  handleDragStart: (id: number, e: React.DragEvent<HTMLLIElement>) => void;
  handleDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
  handleDrop: (id: number, e: React.DragEvent<HTMLLIElement>) => void;
  handleDragEnd: (e: React.DragEvent<HTMLLIElement>) => void;
  deleteTodo: (id: number) => void;
}
