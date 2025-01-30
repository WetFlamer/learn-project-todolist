import { useState } from "react";
import { SortStatuses, PriorityFilter, ProcessFilter } from "../SortFilters/Filters";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  priority: string;
  completeDate: number;
  category: string;
  deadline: string;
  date: number;
}

export function useTodoState() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      date: 2,
      id: 1,
      title: "Купить чипсы",
      completed: false,
      priority: "low",
      completeDate: 0,
      category: "work",
      deadline: "2024-02-1",
    },
    {
      date: 2,
      id: 2,
      title: "Купить пк",
      completed: false,
      priority: "high",
      completeDate: 0,
      category: "personal",
      deadline: "2025-02-2",
    },
    {
      date: 1736183691981,
      id: 3,
      title: "Купить йогурт",
      completed: false,
      priority: "low",
      completeDate: 0,
      category: "work",
      deadline: "2025-02-31",
    },
    {
      date: 4,
      id: 4,
      title: "Купить гречку",
      completed: false,
      priority: "low",
      completeDate: 0,
      category: "study",
      deadline: "2025-02-4",
    },
    {
      date: 3,
      id: 5,
      title: "Купить чай",
      completed: false,
      priority: "low",
      completeDate: 0,
      category: "work",
      deadline: "2025-02-5",
    },
  ]);

  const [sort, setSort] = useState<SortStatuses>(SortStatuses.ALL);
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>(PriorityFilter.ALL);
  const [processFilterValue, setProcessFilterValue] = useState<ProcessFilter>(ProcessFilter.ALL);

  return {
    todos,
    setTodos,
    sort,
    setSort,
    priorityFilter,
    setPriorityFilter,
    processFilterValue,
    setProcessFilterValue,
  };
}
