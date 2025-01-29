import React from "react";
import styles from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";
import { Todo, TodoListProps } from "../Interfaces/TodoInterfaces";
import { SortStatuses, PriorityFilter } from "../TaskFilter/Filters";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  priorityFilter,
  filter,
}) => {
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

  const filteredTasks = todos
    .filter((todo) => {
      let matchesStatus: boolean = true;
      if (filter === SortStatuses.COMPLETED && !todo.completed) {
        matchesStatus = false;
      }
      if (filter === SortStatuses.NOT_COMPLETED && todo.completed) {
        matchesStatus = false;
      }
      const matchesPriority: boolean =
        priorityFilter === PriorityFilter.ALL ||
        todo.priority === priorityFilter;

      return matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      if (filter === SortStatuses.ALPHABET) {
        return a.title.localeCompare(b.title);
      }
      if (filter === SortStatuses.DATE) {
        return b.date - a.date;
      }
      if (filter === SortStatuses.COMPLETED_DATE) {
        return b.completeDate - a.completeDate;
      }
      return 0;
    });
  return (
    <>
      <ul className={styles.listSpace}>
        {filteredTasks.length === 0 && <h3>Задач нет</h3>}
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
            startingEdit={startingEdit}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
