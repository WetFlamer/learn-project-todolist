import React, { useState } from "react";
import { TodoModalProps } from "../Interfaces/TodoInterfaces";
import { PriorityFilter } from "../SortFilters/Filters";
import styles from "../styles/Modal.module.css";

export const TodoEditModal: React.FC<TodoModalProps> = ({
  todos,
  setTodos,
  setIsModalOpen,
  todo,
}) => {
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [modalPriority, setModalPriority] = useState<PriorityFilter>(todo.priority as PriorityFilter); // ✅ Локальный приоритет
  const [deadline, setDeadline] = useState(todo.deadline || "");
  const [category, setCategory] = useState(todo.category);

  const handleEditTodo = () => {
    if (todoTitle.length > 0) {
      setTodos(
        todos.map((t) =>
          t.id === todo.id
            ? { ...t, title: todoTitle, priority: modalPriority, deadline, category }
            : t
        )
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
        <select value={modalPriority} onChange={(e) => setModalPriority(e.target.value as PriorityFilter)}>
          <option value={PriorityFilter.LOW}>Низкий</option>
          <option value={PriorityFilter.MEDIUM}>Средний</option>
          <option value={PriorityFilter.HIGH}>Высокий</option>
        </select>
        <label>Сроки выполнения:</label>
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        <label>Категория:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="work">Работа</option>
          <option value="personal">Личное</option>
          <option value="study">Учеба</option>
          <option value="other">Прочее</option>
        </select>
        <button onClick={handleEditTodo}>Сохранить</button>
        <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
      </div>
    </div>
  );
};
