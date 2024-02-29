import React from "react";
import Column from "./components/column/Column";

const columns = [
  { id: 1, status: "to-do" },
  { id: 2, status: "in-progress" },
  { id: 3, status: "in-qa" },
  { id: 4, status: "done" },
];

const App = () => {
  return (
    <div className="app">
      {columns.map((column) => (
        <Column status={column.status} />
      ))}
    </div>
  );
};

export default App;
