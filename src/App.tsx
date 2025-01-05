import { useState } from "react";
import styles from "./App.module.css";
import TodoList from "./Components/TodoList/TodoList";
import TodoAdd from "./Components/TodoAdd/TodoAdd";
import Header from "./Components/Header/Header";
import {
  FilterStatuses,
  PriorityFilter,
  TaskFilter,
} from "./Components/TaskFilter/TaskFilter";
export function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Купить чипсы",
      completed: false,
      priority: "low",
    },
    {
      id: 2,
      title: "Купить пк",
      completed: false,
      priority: "high",
    },
    {
      id: 3,
      title: "Купить йогурт",
      completed: false,
      priority: "low",
    },
    {
      id: 4,
      title: "Купить гречку",
      completed: false,
      priority: "low",
    },
    {
      id: 5,
      title: "Купить чай",
      completed: false,
      priority: "low",
    },
  ]);

  const [filter, setFilter] = useState<FilterStatuses>(FilterStatuses.All);
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(
    PriorityFilter.Low
  );
  return (
    <>
      <div className={styles.mainSpace}>
        <Header />
        <h1>Список задач</h1>
        <TodoAdd todos={todos} setTodos={setTodos} />
        <TaskFilter
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
          filter={filter}
          setFilter={setFilter}
        />
        {todos.length === 0 ? <h3>Задач нет</h3> : null}
        <TodoList
          priorityFilter={priorityFilter}
          filter={filter}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
    </>
  );
}
