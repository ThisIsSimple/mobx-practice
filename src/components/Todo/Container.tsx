import React, { useState } from "react";
import { observer } from "mobx-react";
import { todo, todo as todoStore } from "../../store";
import Item from "./Item";

const TodoContainer = observer(() => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (content) {
      todo.addTodo({ content });
      setContent("");
    }
  };

  const handleClick = (id: string) => {
    todo.completeTodo({ id });
  };

  const handleDelete = (id: string) => {
    todo.removeTodo({ id });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
            style={{ padding: 7, fontSize: "1.5rem" }}
          />
        </form>

        <div style={{ backgroundColor: "lightgray", padding: 15 }}>
          {todoStore.todo.map((item) => (
            <Item
              key={item.id}
              {...item}
              onClick={handleClick}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
});

export default TodoContainer;
