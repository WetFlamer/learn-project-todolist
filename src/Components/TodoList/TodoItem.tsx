import React, { useState } from "react";
import styles from "./TodoList.module.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  editingId: number | null;
  editValue: string;
  setEditValue: React.Dispatch<React.SetStateAction<string>>;
  setEditingId: React.Dispatch<React.SetStateAction<number | null>>;
  saveEdit: () => void;
  cancelEdit: () => void;
  deleteTodo: (id: number) => void;
  checkboxTodo: (id: number) => void;
  startingEdit: (id: number, currentTitle: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  editingId,
  editValue,
  setEditValue,
  saveEdit,
  cancelEdit,
  deleteTodo,
  checkboxTodo,
  startingEdit,
}) => {
  const [priorityFilter, setPriorityFilter] = useState<priorityFilteres>(
    priorityFilteres.Low
  );
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
          </div>
          <div className={styles.actions}>
            <button onClick={() => deleteTodo(todo.id)}>Удалить</button>
            <button onClick={() => startingEdit(todo.id, todo.title)}>
              Редактировать
            </button>
            <div className={styles.priorityWrapper}>
              <label htmlFor="priority" className={styles.priorityLabel}>
                Приоритет
              </label>
              <select
                id="priority"
                value={priorityFilter}
                onChange={(e) =>
                  setPriorityFilter(e.target.value as priorityFilteres)
                }
              >
                <option value={priorityFilteres.High}>Высокий</option>
                <option value={priorityFilteres.Medium}>Средний</option>
                <option value={priorityFilteres.Low}>Низкий</option>
              </select>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export enum priorityFilteres {
  High = "high",
  Medium = "medium",
  Low = "low",
}
