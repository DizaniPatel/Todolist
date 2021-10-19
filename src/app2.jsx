import React from "react";
import "./App.css";

const App2 = () => {
  const [todo, setTodo] = React.useState("");
  const [todolist, setTodoList] = React.useState([]);
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    const newTodo = {
      id: todo,
      text: todo,
    };
    setTodoList([...todolist].concat(newTodo));

    event.preventDefault();
  };

  const handleEditing = (event) => {
    setEditingText(event.target.value);
  };
  function submitEdits(id) {
    const updatedTodos = [...todolist].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodoList(updatedTodos);

    setTodoEditing(" ");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todolist].filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  }

  return (
    <div className="App">
      <form>
        <h1> To-Do List</h1>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
      <div className="inline">
        {" "}
        {todolist.map((todo) => (
          <div key={todo.id}>
            <div className="inline">
              {todo.id === todoEditing ? (
                <input type="text" onChange={handleEditing} />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <div className="inline">
              {todo.id === todoEditing ? (
                <button className="submit" onClick={() => submitEdits(todo.id)}>
                  Submit
                </button>
              ) : (
                <button
                  className="edit"
                  onClick={() => setTodoEditing(todo.id)}
                >
                  Edit
                </button>
              )}

              <button className="delete" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App2;
