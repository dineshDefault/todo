import React from "react";

const EnterTodo = ({
  todoTitle,
  onChangeTodoInput,
  addTodoOnPressEnter,
  addTodo,
}) => (
  <section className="enter-todo">
    <input
      type="text"
      value={todoTitle}
      onChange={onChangeTodoInput}
      onKeyDown={addTodoOnPressEnter}
    />
    <button disabled={todoTitle.length < 3} onClick={addTodo}>
      +
    </button>
  </section>
);

export default EnterTodo;
