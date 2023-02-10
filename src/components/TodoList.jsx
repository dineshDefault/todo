import React from "react";

const TodoList = ({
  todosList,
  onClickCheck,
  onClearCompletedTodos,
  onDoubleClickTitle,
}) => (
  <section className="todo-list-container">
    {todosList.length > 0 ? (
      <ul>
        {todosList.map((item) => (
          <li className="list-item" key={item.id}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => onClickCheck(item.id)}
            />
            <p onDoubleClick={() => onDoubleClickTitle(item.id)}>
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    ) : (
      <h3>List is empty! Please add todos</h3>
    )}
    {todosList.length > 0 && (
      <button className="clear-completed" onClick={onClearCompletedTodos}>
        Clear Completed
      </button>
    )}
  </section>
);

export default TodoList;
