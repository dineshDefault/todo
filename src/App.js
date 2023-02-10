import React, { useState, useEffect } from "react";
import { generateKey, LocalStorage } from "./utils";
import "./App.css";
import EnterTodo from "./components/EnterTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todosList, setTodosList] = useState(LocalStorage.getTodoList() || []);
  const [todoTitle, setTodoTitle] = useState("");

  const onChangeTodoInput = (event) => {
    const { value } = event.target;
    setTodoTitle(value);
  };

  const addTodo = () => {
    const todo = {
      id: generateKey(todoTitle),
      title: todoTitle,
      complete: false,
    };
    setTodosList((prev) => [...prev, todo]);
    setTodoTitle("");
  };

  const addTodoOnPressEnter = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const onClickCheck = (id) => {
    const clonedTodo = [...todosList];
    const selectedTodo = todosList.findIndex((item) => item.id === id);
    clonedTodo[selectedTodo].complete = !clonedTodo[selectedTodo].complete;
    setTodosList(clonedTodo);
  };

  const onClearCompletedTodos = () => {
    const incompleteTodos = todosList.filter((item) => item.complete === false);
    setTodosList(incompleteTodos);
  };

  const onDoubleClickTitle = (id) => {
    const clonedTodo = [...todosList];
    const selectedTodo = todosList.findIndex((item) => item.id === id);

    const newTitle = prompt("");

    clonedTodo[selectedTodo].title = !newTitle.length
      ? clonedTodo[selectedTodo].title
      : newTitle;

    setTodosList(clonedTodo);
  };

  useEffect(() => {
    LocalStorage.setTodosList(todosList);
  }, [todosList]);

  return (
    <div className="app">
      <header className="app-header">Todo List App</header>
      <EnterTodo
        todoTitle={todoTitle}
        onChangeTodoInput={onChangeTodoInput}
        addTodoOnPressEnter={addTodoOnPressEnter}
        addTodo={addTodo}
      />
      <TodoList
        todosList={todosList}
        onClickCheck={onClickCheck}
        onClearCompletedTodos={onClearCompletedTodos}
        onDoubleClickTitle={onDoubleClickTitle}
      />
    </div>
  );
}

export default App;
