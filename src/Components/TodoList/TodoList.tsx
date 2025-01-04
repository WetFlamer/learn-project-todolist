import React from "react";
import styles from "./TodoList.module.css";
import {TodoItem} from "./TodoItem";
import { FilterStatuses } from "../../App";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface TodoListProps {
  todos: Todo[];
  filter: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, filter }) => {
  const [editingId, setEditingId] = React.useState<number | null>(null);
  const [editValue, setEditValue] = React.useState<string>("");

  const startingEdit = (id: number, currentTitle: string) => {
    setEditingId(id);
    setEditValue(currentTitle);
  };
  const saveEdit = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === editingId ? { ...todo, title: editValue } : todo
      )
    );
    setEditingId(null);
    setEditValue("");
  };
  const cancelEdit = () => {
    setEditingId(null);
    setEditValue("");
  };
  const deleteTodo = (id: number) => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => todo.id !== id));
  };

  const checkboxTodo = (id: number) => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const filteredTasks = todos.filter((todo) => {
    if (filter === FilterStatuses.Completed) return todo.completed;
    if (filter === FilterStatuses.NotCompleted) return !todo.completed;
  });
  return (
    <>
      <ul className={styles.listSpace}>
        {(filter === FilterStatuses.All ? todos : filteredTasks).map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editingId={editingId}
            editValue={editValue}
            setEditValue={setEditValue}
            setEditingId={setEditingId}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
            deleteTodo={deleteTodo}
            checkboxTodo={checkboxTodo}
            startingEdit={startingEdit}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
