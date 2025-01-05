export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
}
export interface TodoListProps {
  todos: Todo[];
  filter: string;
  priorityFilter: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
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
  checkboxTodo: (id: number) => void;
  startingEdit: (id: number, currentTitle: string) => void;
}
export interface priorityFilterProps {
  priorityValue: string;
  todoId: number;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setPriorityValue: React.Dispatch<React.SetStateAction<string>>;
}
