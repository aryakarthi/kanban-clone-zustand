import React from "react";
import Column from "./components/column/Column";

const columns = [
  { id: 1, current_status: "to-do" },
  { id: 2, current_status: "in-progress" },
  { id: 3, current_status: "in-qa" },
  { id: 4, current_status: "done" },
];

const App = () => {
  return (
    <div className="app">
      {columns.map((column) => (
        <Column key={column.id} current_status={column.current_status} />
      ))}
    </div>
  );
};

export default App;
