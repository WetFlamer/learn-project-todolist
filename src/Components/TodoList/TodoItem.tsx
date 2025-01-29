import React from "react";
import styles from "./TodoList.module.css";
import { Todo, TodoItemProps } from "../Interfaces/TodoInterfaces";
import { PriorityComponent } from "../PriorityComponent/PriorityComponent";
import { PriorityFilter } from "../TaskFilter/Filters";

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  todoId,
  editingId,
  editValue,
  setEditValue,
  saveEdit,
  setTodos,
  cancelEdit,
  deleteTodo,

  startingEdit,
}) => {
  const [priorityValue, setPriorityValue] = React.useState<PriorityFilter>(
    todo.priority as PriorityFilter
  );
  const checkboxTodo = (id: number) => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, completeDate: Date.now() }
          : todo
      )
    );
  };
  return (
    <li className={styles.todoItem} key={todo.id}>
      {editingId === todo.id ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={saveEdit}>Сохранить</button>
          <button onClick={cancelEdit}>Отменить</button>
        </>
      ) : (
        <>
          <div
            className={`${todo.completed ? styles.checked : ""} ${
              styles.todoItemText
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => checkboxTodo(todo.id)}
            />
            {todo.title}
            <p className={styles.completedTime}>
              {todo.completed
                ? new Date(todo.completeDate).toLocaleString()
                : null}
            </p>
          </div>
          <div className={styles.actions}>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
            <button onClick={() => startingEdit(todo.id, todo.title)}>
              Редактировать
            </button>
            <PriorityComponent
              setTodos={setTodos}
              todoId={todoId}
              priorityValue={priorityValue}
              setPriorityValue={setPriorityValue}
            />
          </div>
        </>
      )}
    </li>
  );
};
