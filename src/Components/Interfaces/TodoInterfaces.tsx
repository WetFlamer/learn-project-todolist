import { SortStatuses, PriorityFilter } from "../TaskFilter/Filters";

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
  filter: SortStatuses;
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
  priorityValue: PriorityFilter;
  editingId: number | null;
  editValue: string;
  todoId: number;
  setPriorityValue: React.Dispatch<React.SetStateAction<PriorityFilter>>; 
  setEditValue: React.Dispatch<React.SetStateAction<string>>;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
  saveEdit: () => void;
  cancelEdit: () => void;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  deleteTodo: (id: number) => void;
  startingEdit: (id: number, currentTitle: string) => void;
}
