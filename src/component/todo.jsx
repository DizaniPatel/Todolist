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
      {todo.text}

      <div>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
        <button onClick={() => setEdit({ id: todo.id, value: todo.text })}>
          Edit
        </button>
      </div>
    </div>
  ));
}

export default Todo;
