import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  tasks: [],
  draggedTask: null,
  addTask: (title, current_status) =>
    set(
      (state) => ({ tasks: [...state.tasks, { title, current_status }] }),
      false,
      "addTask"
    ),
  deleteTask: (title) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.title !== title),
    })),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, current_status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.title === title ? { title, current_status } : task
      ),
    })),
});

export const useStore = create(
  persist(devtools(store), { name: "task-store" })
);
