import React from "react";
import "./Task.css";
import classNames from "classnames";
import { useStore } from "../../app/store";
import trash from "../../assets/trash.svg";
// const status = "in-progress";

const Task = ({ title }) => {
  const task = useStore((state) =>
    state.tasks.find((task) => task.title === title)
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  const deleteTask = useStore((state) => state.deleteTask);

  return (
    <div
      className="task"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div>{task.title}</div>
      <div className="status-wrapper">
        <div>
          <img src={trash} alt="trash" onClick={() => deleteTask(task.title)} />
        </div>
        <div className={classNames("status", task.current_status)}>
          {task.current_status}
        </div>
      </div>
    </div>
  );
};

export default Task;
