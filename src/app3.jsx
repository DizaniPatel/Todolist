import React from "react";
import "./App.css";

const App3 = () => {
  const [todo, setTodo] = React.useState("");
  const [todolist, setTodoList] = React.useState([]);
  const [editingText, setEditingText] = React.useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    const newTodo = {
      index: todo,
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
          <div key={todo.index}>
            <div className="inline">
              {todo.index === editingText ? (
                <input type="text" onChange={handleEditing} />
              ) : (
                <div>{todo.text}</div>
              )}
            </div>
            <div className="inline">
              {todo.id === editingText ? (
                <button
                  className="submit"
                  onClick={() => submitEdits(todo.index)}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="edit"
                  onClick={() => setEditingText(todo.index)}
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

export default App3;
