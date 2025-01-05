import React from "react";
import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";
import { FilterStatuses, PriorityFilter } from "../TaskFilter/TaskFilter";
import { Todo, TodoListProps } from "../Interfaces/TodoInterfaces";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, priorityFilter, filter }) => {
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
    const matchesStatus =
      filter === FilterStatuses.All ||
      (filter === FilterStatuses.Completed && todo.completed) ||
      (filter === FilterStatuses.NotCompleted && !todo.completed);
  
    const matchesPriority =
      priorityFilter === PriorityFilter.Low || todo.priority === priorityFilter;
  
    return matchesStatus && matchesPriority;
  });
  
  return (
    <>
    <ul className={styles.listSpace}>
  {filteredTasks.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      todoId={todo.id}
      editingId={editingId}
      editValue={editValue}
      setTodos={setTodos}
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
