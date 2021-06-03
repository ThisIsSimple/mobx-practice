import React from "react";
import { makeAutoObservable, observable } from "mobx";
import randomString from "randomstring";
import type { TodoItem } from "../types/todo";

class Todo {
  todo: Array<TodoItem> = [];

  constructor() {
    makeAutoObservable(this, {
      addTodo: observable.ref,
      removeTodo: observable.ref,
      editTodo: observable.ref,
      completeTodo: observable.ref,
    });
  }

  addTodo({ content }: any) {
    this.todo = this.todo.concat({
      id: randomString.generate(7),
      content,
      complete: false,
      createdAt: new Date(),
      updatedAt: null,
    });
  }

  removeTodo({ id }: any) {
    this.todo = this.todo.filter((item) => item.id !== id);
  }

  editTodo({ id, content }: any) {
    this.todo.map((item) => {
      if(item.id === id) {
        item.content = content;
      }
    });
  }

  completeTodo({ id }: any) {
    this.todo
      .filter((item) => item.id === id)
      .map((item) => (item.complete = true));
  }
}

const todoStore = new Todo();
export default todoStore;
