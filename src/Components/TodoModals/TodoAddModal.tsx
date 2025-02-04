import React, { useState } from "react";
import { TodoModalAddProps } from "../Interfaces/TodoInterfaces";
import { PriorityFilter } from "../SortFilters/Filters";
import styles from "../../styles/Modal.module.css";
import { addTodo } from "../../store/todoSlice";
import { useAppDispatch } from "../../App";

export const TodoAddModal: React.FC<TodoModalAddProps> = ({ setIsModalOpen }) => {
  const dispatch = useAppDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  const [priority, setPriority] = useState<PriorityFilter>(PriorityFilter.LOW);
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("work");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoTitle.trim().length > 0) {
      dispatch(
        addTodo({
          title: todoTitle,
          priority: priority,
          deadline: deadline,
          category: category,
        })
      );
      setTodoTitle("");
      setPriority(PriorityFilter.LOW);
      setDeadline("");
      setCategory("work");
      setIsModalOpen(false);
    } else {
      alert("Введите название задачи");
    }
  };
  
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Добавить задачу</h2>
        <input
          type="text"
          value={todoTitle}
          onChange={changeValue}
          placeholder="Название задачи"
        />
        <label htmlFor="priority">Приоритет:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as PriorityFilter)}
        >
          <option value={PriorityFilter.LOW}>Низкий приоритет</option>
          <option value={PriorityFilter.MEDIUM}>Средний приоритет</option>
          <option value={PriorityFilter.HIGH}>Высокий приоритет</option>
        </select>
        <label htmlFor="deadline">Сроки выполнения:</label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          max="2035-01-01"
        />
        <label htmlFor="category">Категория:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="work">Работа</option>
          <option value="personal">Личное</option>
          <option value="study">Учеба</option>
          <option value="other">Прочее</option>
        </select>
        <button onClick={handleAddTodo}>Добавить</button>
        <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
      </div>
    </div>
  );
};
