import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/";
import styles from "../styles/TodoList.module.css";
import { TodoItem } from "./TodoItem";
import { TodoListProps } from "../Interfaces/TodoInterfaces";
import { deleteTodo, reorderTodos } from "../../store/todoSlice";
import {
  PriorityFilter,
  ProcessFilter,
  SortStatuses,
} from "../SortFilters/Filters";
import SearchForm from "../Search/SearchForm";

const TodoList: React.FC<TodoListProps> = ({
  priorityFilter,
  sort,
  processFilterValue,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const deleteTodos = (id: number) => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
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

    dispatch(reorderTodos({ draggedItemId: draggedItem, targetItemId: id }));

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
            deleteTodo={deleteTodos}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
