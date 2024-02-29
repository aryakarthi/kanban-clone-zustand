import React from "react";
import "./Task.css";
import classNames from "classnames";
import { useStore } from "../../app/store";

// const status = "in-progress";

const Task = ({ title }) => {
  const task = useStore((state) =>
    state.tasks.find((task) => task.title === title)
  );
  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="status-wrapper">
        <div></div>
        <div className={classNames("status", task.status)}>{task.status}</div>
      </div>
    </div>
  );
};

export default Task;
