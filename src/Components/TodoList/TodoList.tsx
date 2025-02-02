import React, { useState } from "react";
import styles from "../styles/TodoList.module.css";
import { TodoItem } from "./TodoItem";
import { Todo, TodoListProps } from "../Interfaces/TodoInterfaces";
import {
  PriorityFilter,
  ProcessFilter,
  SortStatuses,
} from "../SortFilters/Filters";
import SearchForm from "../Search/SearchForm";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  priorityFilter,
  sort,
  processFilterValue,
}) => {
  const [searchValue, setSearchValue] = useState("");

  const deleteTodo = (id: number) => {
    setTodos((prevTodos: Todo[]) => prevTodos.filter((todo) => todo.id !== id));
  };
  const filteredTasks = todos
    .filter((todo) => {
      let matchesStatus: boolean = true;
      if (processFilterValue === ProcessFilter.COMPLETED && !todo.completed) {
        matchesStatus = false;
      }
      if (
        processFilterValue === ProcessFilter.NOT_COMPLETED &&
        todo.completed
      ) {
        matchesStatus = false;
      }
      const matchesPriority: boolean =
        priorityFilter === PriorityFilter.ALL ||
        todo.priority === priorityFilter;

      return matchesStatus && matchesPriority;
    })
    .filter((todo) =>
      todo.title.toLowerCase().includes(searchValue.toLowerCase())
    )
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

  const [draggedItem, setDraggedItem] = useState<number | null>(null);

  const handleDragStart = (id: number, e: React.DragEvent<HTMLLIElement>) => {
    setDraggedItem(id);
    e.currentTarget.classList.add(styles.dragged);
    e.currentTarget.classList.add(styles.grabbing);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add(styles.dragOver);
  };

  const handleDrop = (id: number) => {
    if (draggedItem === null) return;

    setTodos((prevTodo) => {
      const draggedIndex = prevTodo.findIndex(
        (todo) => todo.id === draggedItem
      );
      const targetIndex = prevTodo.findIndex((todo) => todo.id === id);

      if (draggedIndex === -1 || targetIndex === -1) return prevTodo;

      const updatedTasks = [...prevTodo];
      const [movedItem] = updatedTasks.splice(draggedIndex, 1);
      updatedTasks.splice(targetIndex, 0, movedItem);

      return updatedTasks;
    });

    setDraggedItem(null);

    document.querySelectorAll(`.${styles.dragged}`).forEach((el) => {
      el.classList.remove(styles.dragged);
    });

    document.querySelectorAll(`.${styles.dragOver}`).forEach((el) => {
      el.classList.remove(styles.dragOver);
    });
    document.querySelectorAll(`.${styles.grabbing}`).forEach((el) => {
      el.classList.remove(styles.grabbing);
    });
  };

  return (
    <>
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      <ul className={styles.listSpace}>
        {filteredTasks.length === 0 && <h3>Задач нет</h3>}
        {filteredTasks.map((todo) => (
          <TodoItem
            key={todo.id}
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
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
