import React, { useState } from "react";
import styles from "../styles/TodoList.module.css";
import { Todo, TodoItemProps } from "../Interfaces/TodoInterfaces";
import { PriorityComponent } from "../PriorityComponent/PriorityComponent";
import { PriorityFilter } from "../SortFilters/Filters";
import Button from "../UI/Button";
import TaskCategoryBadge from "../Task/TaskCategoryBadge";
import TaskDeadline from "../Task/TaskDeadline";
import TaskCompletedTime from "../Task/TaskCompletedTime";
import { TodoEditModal } from "../TodoModals/TodoEditModal";

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  todoId,
  todos,
  setTodos,
  handleDragStart,
  handleDragOver,
  handleDrop,
  deleteTodo
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
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
    <>
      <li
        className={`${styles.todoItem}`}
        key={todo.id}
        draggable
        onDragStart={(e) => handleDragStart(todo.id, e)}
        onDragOver={handleDragOver}
        onDrop={(e) => handleDrop(todo.id, e)}
      >
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
          <Button text="Удалить" onClick={() => deleteTodo(todo.id)} />
          <Button
            text="Редактировать"
            onClick={() => {
              setEditingId(todo.id);
              setIsModalOpen(true);
            }}
          />
          <PriorityComponent
            setTodos={setTodos}
            todoPriority={todo.priority as PriorityFilter}
            todoId={todoId}
            priorityValue={priorityValue}
            setPriorityValue={setPriorityValue}
          />
        </div>
      </li>
      {isModalOpen && (
        <TodoEditModal
          editingId={editingId}
          todos={todos}
          setTodos={setTodos}
          setIsModalOpen={setIsModalOpen}
          todo={todo}
        />
      )}
    </>
  );
};
