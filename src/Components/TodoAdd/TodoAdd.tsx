import React, { useState } from "react";
import { TodoListProps } from "../Interfaces/TodoInterfaces";
import { TodoAddModal } from "../TodoModals/TodoAddModal";
import styles from "../styles/TodoAdd.module.css";

const TodoAdd: React.FC<TodoListProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.todoAddForm}>
      <button onClick={() => setIsModalOpen(true)}>Добавить задачу</button>

      {isModalOpen && (
        <TodoAddModal
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default TodoAdd;
