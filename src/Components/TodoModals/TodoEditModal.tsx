import React, { useState } from "react";
import { TodoModalProps } from "../Interfaces/TodoInterfaces";
import { PriorityFilter } from "../SortFilters/Filters";
import styles from "../../styles/Modal.module.css";
import { useDispatch } from "react-redux";
import { handleEditTodo } from "../../store/todoSlice";

export const TodoEditModal: React.FC<TodoModalProps> = ({
  setIsModalOpen,
  todo,
}) => {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [modalPriority, setModalPriority] = useState<PriorityFilter>(
    todo.priority as PriorityFilter
  );
  const [deadline, setDeadline] = useState(todo.deadline || "");
  const [category, setCategory] = useState(todo.category);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (todoTitle.trim().length > 0) {
      dispatch(
        handleEditTodo({
          id: todo.id,
          title: todoTitle,
          priority: modalPriority,
          deadline: deadline,
          category: category,
        })
      );
      setIsModalOpen(false);
    } else {
      alert("Введите название задачи");
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Редактировать задачу</h2>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="Название задачи"
        />
        <label>Приоритет:</label>
        <select
          value={modalPriority}
          onChange={(e) => setModalPriority(e.target.value as PriorityFilter)}
        >
          <option value={PriorityFilter.LOW}>Низкий</option>
          <option value={PriorityFilter.MEDIUM}>Средний</option>
          <option value={PriorityFilter.HIGH}>Высокий</option>
        </select>
        <label>Сроки выполнения:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <label>Категория:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="work">Работа</option>
          <option value="personal">Личное</option>
          <option value="study">Учеба</option>
          <option value="other">Прочее</option>
        </select>
        <button onClick={handleEdit}>Сохранить</button>
        <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
      </div>
    </div>
  );
};
