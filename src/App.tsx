import { useTodoState } from "./Components/hooks/useTodoState";
import styles from "./App.module.css";
import TodoList from "./Components/TodoList/TodoList";
import TodoAdd from "./Components/TodoAdd/TodoAdd";
import Header from "./Components/Header/Header";
import { TaskFilter } from "./Components/SortFilters/TaskFilter";

export function App() {
  const {
    sort,
    setSort,
    priorityFilter,
    setPriorityFilter,
    processFilterValue,
    setProcessFilterValue,
  } = useTodoState();

  return (
    
    <div className={styles.mainSpace}>
      <Header />
      <h1>Список задач</h1>
      <TodoAdd/>
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
