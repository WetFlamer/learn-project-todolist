import React from "react";
import styles from "../styles/TodoList.module.css";
import { TodoItem } from "./TodoItem";
import { Todo, TodoListProps } from "../Interfaces/TodoInterfaces";
import { PriorityFilter, ProcessFilter, SortStatuses } from "../SortFilters/Filters";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  priorityFilter,
  sort,
  processFilterValue,
}) => {
  const deleteTodo = (id: number) => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTasks = todos
    .filter((todo) => {
      let matchesStatus: boolean = true;
      if (processFilterValue === ProcessFilter.COMPLETED && !todo.completed) {
        matchesStatus = false;
      }
      if (processFilterValue === ProcessFilter.NOT_COMPLETED && todo.completed) {
        matchesStatus = false;
      }
      const matchesPriority: boolean =
        priorityFilter === PriorityFilter.ALL ||
        todo.priority === priorityFilter;

      return matchesStatus && matchesPriority;
    })
    .sort((a, b) => {
      if (sort === SortStatuses.ALPHABET) {
        return a.title.localeCompare(b.title);
      }
      if (sort === SortStatuses.DEADLINE) {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
      
      if (sort === SortStatuses.DATE) {
        return b.date - a.date;
      }
      if (sort === SortStatuses.COMPLETED_DATE) {
        return b.completeDate - a.completeDate;
      }
      return 0;
    });
  return (
    <>
      <ul className={styles.listSpace}>
        {filteredTasks.length === 0 && <h3>Задач нет</h3>}
        {filteredTasks.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            todos={todos}
            todoId={todo.id}
            setTodos={setTodos}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
