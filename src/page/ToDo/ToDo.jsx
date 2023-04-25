import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo } from "../../sliecs/Reducer";

export default function ToDo() {
  const todos = useSelector((state) => state.todo.todos);
  const [updateInput, setUpdateInput] = useState("");
  const dispatch = useDispatch();

  const handleRemove = (todo) => {
    dispatch(removeTodo(todo.id));
  };

  const handleUpdate = (todo) => {
    dispatch(updateTodo({ ...todo, payload: updateInput }));
    setUpdateInput("");
  };

  return (
    <div>
      <ToDoFrom />

      {todos.map((todo) => (
        <div key={todo.id} className="h3 form-group container text-center">
          {todo.text}
          <input
          className="form-control"
            key={todo.id}
            placeholder="Update Value"
            value={updateInput}
            type="text"
            onChange={(event) => setUpdateInput(event.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => handleUpdate(todo)}
          >
            UpdateTodo
          </button>
          <span className="btn btn-danger" onClick={() => handleRemove(todo)}>
            ❌
          </span>
        </div>
      ))}
    </div>
  );
}

function ToDoFrom() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const [input, setInput] = useState("");
  console.log(input);

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={handleAdd}  className="container"
    >
      <input
      className="form-control"

        type="text"
        value={input}
        placeholder="Adding Todo"
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="btn btn-success" type="submit">
        Add ToDo
      </button>
    </form>
  );
}
