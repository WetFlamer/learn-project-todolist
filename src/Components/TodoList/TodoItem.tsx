import React from "react";
import styles from "../styles/TodoList.module.css";
import { Todo, TodoItemProps } from "../Interfaces/TodoInterfaces";
import { PriorityComponent } from "../PriorityComponent/PriorityComponent";
import { PriorityFilter } from "../SortFilters/Filters";
import Button from "../UI/Button";
import TaskCategoryBadge from "../Task/TaskCategoryBadge";
import TaskDeadline from "../Task/TaskDeadline";
import TaskCompletedTime from "../Task/TaskCompletedTime";
import TaskEditForm from "../Task/TaskEditForm";

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
        <TaskEditForm
          editValue={editValue}
          setEditValue={setEditValue}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
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
                <TaskCategoryBadge category={todo.category} />
                <TaskDeadline deadline={todo.deadline} />
              </div>

              <TaskCompletedTime
                completed={todo.completed}
                completeDate={todo.completeDate}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <Button
              text="Удалить"
              onClick={() => deleteTodo(todo.id)}
            />
            <Button
              text="Редактировать"
              onClick={() => startingEdit(todo.id, todo.title)}
            />
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
