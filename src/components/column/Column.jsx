import React from "react";
import "./Column.css";
import Task from "../task/Task";
import { useStore } from "../../app/store";

const Column = ({ status }) => {
  const tasks = useStore((state) =>
    state.tasks.filter((task) => task.status === status)
  );
  return (
    <div className="column">
      <div className="title-wrapper">
        <p className="state-title">{status}</p>
        <button>Add</button>
      </div>

      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
};

export default Column;
