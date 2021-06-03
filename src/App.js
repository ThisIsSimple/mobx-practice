import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
      <div style={{ padding: 50 }}>
        <Todo />
        <Counter />
      </div>
    </>
  );
};

export default App;
