import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../Components/Interfaces/TodoInterfaces";
import { RootState } from ".";

export const fetchTodos = createAsyncThunk<
  Todo[],
  void,
  { rejectValue: string }
>("todos/fetchTodos", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:5555/todos");

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    const data: Todo[] = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Произошла неизвестная ошибка");
  }
});

export const delTodo = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("todos/deleteTodo", async (id, { rejectWithValue, dispatch }) => {
  try {
    const response = await fetch(`http://localhost:5555/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }

    dispatch(deleteTodo({ id }));
    return id;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("Произошла неизвестная ошибка");
  }
});

export const toggleStatus = createAsyncThunk<
  void,
  number,
  { rejectValue: string; state: RootState }
>(
  "todos/toggleStatus",
  async function (id, { rejectWithValue, getState, dispatch }) {
    const todo = getState().todos.todos.find((todo) => todo._id === id);

    if (!todo) {
      return rejectWithValue("Задача не найдена");
    }

    try {
      const response = await fetch(`http://localhost:5555/todo/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
          completeDate: Date.now(),
          deadline: "",
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }

      dispatch(changeCheckBox({ id }));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Произошла неизвестная ошибка");
    }
  }
);

export const addTodo = createAsyncThunk<
  void,
  { title: string; priority: string; deadline: string; category: string },
  { rejectValue: string; state: RootState }
>(
  "todos/addTodo",
  async function (
    { title, deadline, priority, category },
    { rejectWithValue, dispatch }
  ) {
    try {
      const response = await fetch(`http://localhost:5555/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, deadline, priority, category }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }

      const newTodo: Todo = await response.json();
      dispatch(setTodos(newTodo));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Произошла неизвестная ошибка");
    }
  }
);
export const editTodo = createAsyncThunk<
  void,
  {
    id: number;
    title: string;
    priority: string;
    deadline: string;
    category: string;
  },
  { rejectValue: string; state: RootState }
>(
  "todos/addTodo",
  async function (
    { id, title, deadline, priority, category },
    { rejectWithValue, dispatch }
  ) {
    try {
      const response = await fetch(`http://localhost:5555/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, deadline, priority, category }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }

      const newTodo: Todo = await response.json();
      dispatch(handleEditTodo(newTodo));
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Произошла неизвестная ошибка");
    }
  }
);
interface TodoState {
  todos: Todo[];
  theme: string;
  status: string | null;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  theme: localStorage.getItem("theme") || "light",
  status: null,
  error: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos(
      state,
      action: PayloadAction<{
        title: string;
        priority: string;
        deadline: string;
        category: string;
      }>
    ) {
      state.todos.unshift({
        date: Date.now(),
        _id: Date.now(),
        title: action.payload.title,
        completed: false,
        priority: action.payload.priority,
        completeDate: 0,
        deadline: action.payload.deadline,
        category: action.payload.category,
      });
    },
    deleteTodo(state, action: PayloadAction<{ id: number }>) {
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload.id
      );
    },
    handleEditTodo(
      state,
      action: PayloadAction<{
        _id: number;
        title: string;
        priority: string;
        deadline: string;
        category: string;
      }>
    ) {
      const todo = state.todos.find((todo) => todo._id === action.payload._id);
      if (todo) {
        todo.title = action.payload.title;
        todo.priority = action.payload.priority;
        todo.deadline = action.payload.deadline;
        todo.category = action.payload.category;
      }
    },
    changePriorityValue(
      state,
      action: PayloadAction<{ id: number; priority: string }>
    ) {
      const todo = state.todos.find((todo) => todo._id === action.payload.id);
      if (todo) {
        todo.priority = action.payload.priority;
      }
    },
    changeCheckBox(state, action: PayloadAction<{ id: number }>) {
      const todo = state.todos.find((todo) => todo._id === action.payload.id);
      if (todo) {
        todo.completed = !todo.completed;
        todo.completeDate = Date.now();
        todo.deadline = "";
      }
    },
    reorderTodos(
      state,
      action: PayloadAction<{ draggedItemId: number; targetItemId: number }>
    ) {
      const draggedIndex = state.todos.findIndex(
        (t) => t._id === action.payload.draggedItemId
      );
      const targetIndex = state.todos.findIndex(
        (t) => t._id === action.payload.targetItemId
      );

      if (draggedIndex !== -1 && targetIndex !== -1) {
        const [movedItem] = state.todos.splice(draggedIndex, 1);
        state.todos.splice(targetIndex, 0, movedItem);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.status = "resolved";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.error("Ошибка загрузки TODOs:", action.error);
        state.status = "rejected";
        state.error = action.payload ?? "Неизвестная ошибка";
      });
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
