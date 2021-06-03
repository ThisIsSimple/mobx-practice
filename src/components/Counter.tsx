import React from "react";
import { observer } from "mobx-react";
import { count, countObject } from "../store";

const Counter = observer(() => {
  return (
    <div style={{ padding: "50px" }}>
      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Class)</h1>
        <div>number: {count.number}</div>
        <button onClick={() => count.increase()}>plus</button>
        <button onClick={() => count.decrease()}>minus</button>
      </div>

      <div style={{ marginBottom: "50px" }}>
        <h1>Count (Object)</h1>
        <div>number: {countObject.number}</div>
        <button onClick={() => countObject.increase()}>plus</button>
        <button onClick={() => countObject.decrease()}>minus</button>
      </div>
    </div>
  );
});

export default Counter;
