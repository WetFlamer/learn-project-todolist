import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../Components/Interfaces/TodoInterfaces";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
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
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos(
      state,
      action: PayloadAction<{
        todoTitle: string;
        priority: string;
        deadline: string;
        category: string;
      }>
    ) {
      state.todos.unshift({
        date: Date.now(),
        id: Date.now(),
        title: action.payload.todoTitle,
        completed: false,
        priority: action.payload.priority,
        completeDate: 0,
        deadline: action.payload.deadline,
        category: action.payload.category,
      });
    },
    deleteTodo(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },

    handleEditTodo(
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        priority: string;
        deadline: string;
        category: string;
      }>
    ) {
      const { id, title, priority, deadline, category } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].title = title;
        state.todos[todoIndex].priority = priority;
        state.todos[todoIndex].deadline = deadline;
        state.todos[todoIndex].category = category;
      }
    },
    changePriorityValue(
      state,
      action: PayloadAction<{ id: number; priority: string }>
    ) {
      const { id, priority } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].priority = priority;
      }
    },
    changeCheckBox(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
        state.todos[todoIndex].completeDate = Date.now();
        state.todos[todoIndex].deadline = "";
        state.todos[todoIndex].category = "";
      }
    },
    reorderTodos(
      state,
      action: PayloadAction<{ draggedItemId: number; targetItemId: number }>
    ) {
      const { draggedItemId, targetItemId } = action.payload;

      const draggedIndex = state.todos.findIndex(
        (todo) => todo.id === draggedItemId
      );
      const targetIndex = state.todos.findIndex(
        (todo) => todo.id === targetItemId
      );

      if (draggedIndex !== -1 && targetIndex !== -1) {
        const updatedTodos = [...state.todos];
        const [movedItem] = updatedTodos.splice(draggedIndex, 1);
        updatedTodos.splice(targetIndex, 0, movedItem);
        state.todos = updatedTodos;
      }
    },
  },
});

export const {
  setTodos,
  deleteTodo,
  handleEditTodo,
  changeCheckBox,
  reorderTodos,
  changePriorityValue,
} = todoSlice.actions;
export default todoSlice.reducer;
