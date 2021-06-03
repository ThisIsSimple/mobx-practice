import React from "react";
import type { TodoItem } from "../../types/todo";

const Item: React.FC<TodoItem> = ({
  id,
  content,
  complete,
  createdAt,
  updatedAt,
  onClick,
  onDelete,
}) => {
  return (
    <>
      <div
        style={{
          padding: 15,
          backgroundColor: "#eeeeee",
          borderRadius: 7,
          marginBottom: 7,
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick(id);
        }}
      >
        <div>
          <span style={{ marginRight: 15 }}>{complete ? "done" : "nope"}</span>
          <span>{content}</span>
        </div>
        <div>
          <span style={{ marginRight: 15 }}>{createdAt.toUTCString()}</span>
          <span style={{cursor: 'pointer'}} onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}>x</span>
        </div>
      </div>
    </>
  );
};

export default Item;
