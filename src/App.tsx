import { useState } from "react";
import styles from "./App.module.css";
import TodoList from "./Components/TodoList/TodoList";
import TodoAdd from "./Components/TodoAdd/TodoAdd";
import Header from "./Components/Header/Header";
export function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Купить чипсы",
      completed: false,
    },
    {
      id: 2,
      title: "Купить пк",
      completed: false,
    },
    {
      id: 3,
      title: "Купить йогурт",
      completed: false,
    },
    {
      id: 4,
      title: "Купить гречку",
      completed: false,
    },
    {
      id: 5,
      title: "Купить чай",
      completed: false,
    },
  ]);
 

  const [filter, setFilter] = useState<FilterStatuses>(FilterStatuses.All);

  return (
    <>
      <div className={styles.mainSpace}>
        <Header />
        <h1>Список задач</h1>
        <TodoAdd todos={todos} setTodos={setTodos} />
        <div>
          <label htmlFor="filter">Фильтр задач:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as FilterStatuses)
            }
          >
            <option value={FilterStatuses.All}>Все</option>
            <option value={FilterStatuses.Completed}>Выполненные</option>
            <option value={FilterStatuses.NotCompleted}>Невыполненные</option>
          </select>
        </div>
        {todos.length === 0 ? <h3>Задач нет</h3> : null}
        <TodoList filter={filter} setTodos={setTodos} todos={todos} />
      </div>
    </>
  );
}


export enum FilterStatuses {
  All = "all",
  Completed = "completed",
  NotCompleted = "notCompleted",
}