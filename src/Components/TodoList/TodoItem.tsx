import React, { useState } from "react";
import styles from "../../styles/TodoList.module.css";
import { TodoItemProps } from "../Interfaces/TodoInterfaces";
import { PriorityComponent } from "../PriorityComponent/PriorityComponent";
import { PriorityFilter } from "../SortFilters/Filters";
import Button from "../UI/Button";
import TaskCategoryBadge from "../Task/TaskCategoryBadge";
import TaskDeadline from "../Task/TaskDeadline";
import TaskCompletedTime from "../Task/TaskCompletedTime";
import { TodoEditModal } from "../TodoModals/TodoEditModal";
import { toggleStatus } from "../../store/todoSlice";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useAppDispatch } from "../../App";

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  todoId,
  handleDragEnd,
  handleDragStart,
  handleDragOver,
  handleDrop,
  deleteTodo,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [priorityValue, setPriorityValue] = React.useState<PriorityFilter>(
    todo.priority as PriorityFilter
  );

  const dispatch = useAppDispatch();

  const checkboxTodo = (id: number) => {
    dispatch(toggleStatus(id));
  };
  

  return (
    <>
      <li
        className={`${styles.todoItem}`}
        key={todo._id}
        draggable
        onDragStart={(e) => handleDragStart(todo._id, e)}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDrop={(e) => handleDrop(todo._id, e)}
      >
        <div className={styles.todoContent}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => checkboxTodo(todo._id)}
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
          <PriorityComponent
            todoPriority={todo.priority as PriorityFilter}
            todoId={todoId}
            priorityValue={priorityValue}
            setPriorityValue={setPriorityValue}
          />
          <Button
            icon={FaTrash}
            onClick={() => deleteTodo(todo._id)}
            variant="icon"
          />
          <Button
            icon={FaEdit}
            onClick={() => {
              setEditingId(todo._id);
              setIsModalOpen(true);
            }}
            variant="icon"
          />
        </div>
      </li>
      {isModalOpen && (
        <TodoEditModal
          editingId={editingId}
          setIsModalOpen={setIsModalOpen}
          todo={todo}
        />
      )}
    </>
  );
};
