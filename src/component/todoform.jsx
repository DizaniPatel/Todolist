import React, { useState } from "react";
import "../App.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date(),
      text: input,
    });
    setInput("");
  };

  return (
    <form>
      {props.edit ? (
        <div>
          <input value={input} onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <input value={input} onChange={handleChange} />
          <button onClick={handleSubmit}>Add todo</button>
        </div>
      )}
    </form>
  );
}

export default TodoForm;
