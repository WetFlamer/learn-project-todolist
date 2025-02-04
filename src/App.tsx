import { useTodoState } from "./Components/hooks/useTodoState";
import styles from "../src/styles/App.module.css";
import TodoList from "./Components/TodoList/TodoList";
import TodoAdd from "./Components/TodoAdd/TodoAdd";
import Header from "./Components/Header/Header";
import { TaskFilter } from "./Components/SortFilters/TaskFilter";
import { useTheme } from "./Components/hooks/useTheme";
import { useEffect } from "react";
import { AppDispatch } from "./store";
import { useDispatch } from "react-redux";
export const useAppDispatch = () => useDispatch<AppDispatch>();

export function App() {

  const {
    sort,
    setSort,
    priorityFilter,
    setPriorityFilter,
    processFilterValue,
    setProcessFilterValue,
  } = useTodoState();
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className={styles.mainSpace}>
      <Header />
      <h1>Список задач</h1>
      <TodoAdd />
      <TaskFilter
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        sort={sort}
        processFilterValue={processFilterValue}
        setProcessFilterValue={setProcessFilterValue}
        setSort={setSort}
      />
      <TodoList
        priorityFilter={priorityFilter}
        sort={sort}
        processFilterValue={processFilterValue}
      />
    </div>
  );
}
