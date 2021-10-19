import React, { useState } from "react";
import TodoForm from "../component/todoform";

function Todo({ todos, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo) => (
    <div>
      <li>
        <div className="inline width">{todo.text}</div>
        <div className="inline">
          <button className="delete" onClick={() => removeTodo(todo.id)}>
            Delete
          </button>
          <button
            className="edit"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            Edit
          </button>
        </div>
      </li>
    </div>
  ));
}

export default Todo;
