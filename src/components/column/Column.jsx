import React, { useState } from "react";
import "./Column.css";
import Task from "../task/Task";
import { useStore } from "../../app/store";
import classNames from "classnames";

const Column = ({ current_status }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((state) =>
    state.tasks.filter((task) => task.current_status === current_status)
  );
  const all = useStore();
  console.log(all);

  const addTask = useStore((state) => state.addTask);
  const setDraggedTask = useStore((state) => state.setDraggedTask);
  const draggedTask = useStore((state) => state.draggedTask);
  const moveTask = useStore((state) => state.moveTask);

  return (
    <div
      className={classNames("column", { drop: drop })}
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask, current_status);
        setDraggedTask(null);
      }}
    >
      <div className="title-wrapper">
        <p className="state-title">{current_status}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add
        </button>
      </div>

      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}

      {open && (
        <div className="modal">
          <div className="modal-content">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, current_status);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
