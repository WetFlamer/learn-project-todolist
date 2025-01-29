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
          ? {
              ...todo,
              completed: !todo.completed,
              completeDate: Date.now(),
              deadline: "", 
            }
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
          <div className={styles.todoContent}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => checkboxTodo(todo.id)}
            />

            <div className={styles.taskInfo}>
              <span className={styles.taskTitle}>{todo.title}</span>

              <div className={styles.metaInfo}>
                {todo.category && (
                  <span
                    className={`${styles.categoryBadge} ${
                      styles[todo.category]
                    }`}
                  >
                    {todo.category === "work"
                      ? "Работа"
                      : todo.category === "personal"
                      ? "Личное"
                      : todo.category === "study"
                      ? "Учеба"
                      : "Прочее"}
                  </span>
                )}

                {todo.deadline && (
                  <span
                    className={`${styles.deadline} ${
                      new Date(todo.deadline).getTime() < Date.now()
                        ? styles.expired
                        : ""
                    }`}
                  >
                    Дедлайн: {new Date(todo.deadline).toLocaleDateString()}
                  </span>
                )}
              </div>

              <p className={styles.completedTime}>
                {todo.completed
                  ? `Выполнено: ${new Date(todo.completeDate).toLocaleString()}`
                  : null}
              </p>
            </div>
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
