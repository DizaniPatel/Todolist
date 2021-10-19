import React from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = React.useState("");
  const [todolist, setTodoList] = React.useState([]);
  const [editText, seteditText] = React.useState("");
  const [todoeditText, setTodoEditing] = React.useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleEditing = (event) => {
    seteditText(event.target.value);
  };
  const handleSubmit = (event) => {
    const newTodo = {
      index: todo,
      text: todo,
    };
    setTodoList([...todolist].concat(newTodo));

    event.preventDefault();
  };

  function deleteTodo(index) {
    let updatedTodos = [...todolist].filter((todo) => todo.index !== index);
    setTodoList(updatedTodos);
  }

  function submitEdits(index) {
    const updatedTodos = [...todolist].map((todo) => {
      if (todo.index === index) {
        todo.text = editText;
      }
      return todo;
    });
    setTodoList(updatedTodos);
    setTodoEditing("");
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
          <div key={todo.index}>
            <div className="inline">
              {todo.index === todoeditText ? (
                <input type="text" onChange={handleEditing} />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <div className="inline">
              {todo.index === todoeditText ? (
                <button
                  className="submit"
                  onClick={() => submitEdits(todo.index)}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="edit"
                  onClick={() => setTodoEditing(todo.index)}
                >
                  Edit
                </button>
              )}

              <button className="delete" onClick={() => deleteTodo(todo.index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
