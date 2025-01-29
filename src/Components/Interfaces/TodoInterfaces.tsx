import { SortStatuses, PriorityFilter, ProcessFilter } from "../TaskFilter/Filters";

export interface Todo {
  date: number;
  id: number;
  title: string;
  completed: boolean;
  priority: string;
  completeDate: number;
}
export interface TodoListProps {
  todos: Todo[];
  sort: SortStatuses;
  processFilterValue: ProcessFilter;
  priorityFilter: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export interface priorityFilterProps {
  priorityValue: PriorityFilter;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todoId: number;
  setPriorityValue: React.Dispatch<React.SetStateAction<PriorityFilter>>; 
}
export interface TodoItemProps {
  todo: Todo;
  editingId: number | null;
  editValue: string;
  todoId: number;
  setEditValue: React.Dispatch<React.SetStateAction<string>>;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
  saveEdit: () => void;
  cancelEdit: () => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteTodo: (id: number) => void;
  startingEdit: (id: number, currentTitle: string) => void;
}
