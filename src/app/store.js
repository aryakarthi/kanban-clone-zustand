import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "State management", status: "done" }],
});

export const useStore = create(store);
