import React, { useState } from "react";
import styles from "./TodoAdd.module.css";
import { TodoListProps } from "../Interfaces/TodoInterfaces";
import { PriorityFilter } from "../TaskFilter/Filters";



const TodoAdd: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [priority, setPriority] = React.useState<PriorityFilter>(PriorityFilter.LOW)
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("work"); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoTitle.length > 0) {
      setTodos(() => [
        {
          date: Date.now(),
          id: Date.now(),
          title: todoTitle,
          completed: false,
          priority,
          completeDate: 0,
          deadline,
          category,
        },
        ...todos,
      ]);
      setTodoTitle("");
      setPriority(PriorityFilter.LOW);
      setDeadline("");
      setCategory("work");  
      console.log(todos)
      setIsModalOpen(false);  
    } else {
      alert("Введите название задачи");
    }
  };

  return (
    <div className={styles.todoAddForm}>
      <button onClick={() => setIsModalOpen(true)}>
        Добавить задачу
      </button>

      {isModalOpen && (
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
            <select value={priority} onChange={(e) => setPriority(e.target.value as PriorityFilter)}>
            <option value={PriorityFilter.LOW}>Низкий приоритет</option>
              <option value={PriorityFilter.MEDIUM}>Средний приоритет</option>
              <option value={PriorityFilter.HIGH}>Высокий приоритет</option>
            </select>
            <label htmlFor="deadline">Сроки выполнения:</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
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
      )}
    </div>
  );
};

export default TodoAdd;
