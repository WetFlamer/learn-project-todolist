import React, { useState } from "react";
import { TodoListProps } from "../Interfaces/TodoInterfaces";
import { TodoModal } from "./TodoModal";
import styles from "../styles/TodoAdd.module.css";

const TodoAdd: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.todoAddForm}>
      <button onClick={() => setIsModalOpen(true)}>
        Добавить задачу
      </button>

      {isModalOpen && (
        <TodoModal 
          todos={todos} 
          setTodos={setTodos} 
          setIsModalOpen={setIsModalOpen} 
        />
      )}
    </div>
  );
};

export default TodoAdd;
