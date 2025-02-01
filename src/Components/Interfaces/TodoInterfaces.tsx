import {
  SortStatuses,
  PriorityFilter,
  ProcessFilter,
} from "../SortFilters/Filters";

export interface Todo {
  date: number;
  id: number;
  title: string;
  completed: boolean;
  priority: string;
  completeDate: number;
  category: string;
  deadline: string;
}
export interface TodoModalProps {
  editingId: number | null;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface TodoListProps {
  todos: Todo[];
  sort?: SortStatuses;
  processFilterValue?: ProcessFilter;
  priorityFilter?: PriorityFilter;

  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export interface priorityFilterProps {
  priorityValue: PriorityFilter;
  todoPriority: PriorityFilter;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
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
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteTodo: (id: number) => void;
}
