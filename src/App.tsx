import { useState } from "react";
import styles from "./App.module.css";
import TodoList from "./Components/TodoList/TodoList";
import TodoAdd from "./Components/TodoAdd/TodoAdd";
import Header from "./Components/Header/Header";
import {
  FilterStatuses,
  PriorityFilter,
} from "./Components/TaskFilter/Filters";
import { TaskFilter } from "./Components/TaskFilter/TaskFilter";

export function App() {
  const [todos, setTodos] = useState([
    {
      date: 2,
      id: 1,
      title: "Купить чипсы",
      completed: false,
      priority: "low",
      completeDate: 0,
    },
    {
      date: 2,
      id: 2,
      title: "Купить пк",
      completed: false,
      priority: "high",
      completeDate: 0,
    },
    {
      date: 1736183691981,
      id: 3,
      title: "Купить йогурт",
      completed: false,
      priority: "low",
      completeDate: 0,
    },
    {
      date: 4,
      id: 4,
      title: "Купить гречку",
      completed: false,
      priority: "low",
      completeDate: 0,
    },
    {
      date: 3,
      id: 5,
      title: "Купить чай",
      completed: false,
      priority: "low",
      completeDate: 0,
    },
  ]);

  const [filter, setFilter] = useState<FilterStatuses>(FilterStatuses.ALL);
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(
    PriorityFilter.ALL
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
          todos={todos}
          setFilter={setFilter}
        />
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
