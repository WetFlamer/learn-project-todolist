import React, { useState } from "react";
import styles from "./TodoAdd.module.css";
import { Todo } from "../Interfaces/TodoInterfaces";


interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}
const TodoAdd: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const changeValue = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setTodoTitle(e.target.value);
  };
  const addTodo = (title: string) => {
    setTodos(() => {
      return [{ id: Date.now(), title, completed: false, priority: 'low' }, ...todos]; 
    });
    setTodoTitle(""); 
    console.log(todos)
  };
  return (
    <div className={styles.todoAddForm}>
      <input
        onChange={changeValue}
        type="text"
        value={todoTitle}
      />
      <button
        onClick={() => {
          addTodo(todoTitle);
        }}
      >
        Добавить
      </button>
    </div>
  );
};

export default TodoAdd;
