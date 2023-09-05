import { useState } from "react";

//  import { useState } from "react";
// useState

// import React from "react";
// React.useState

import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "Build a really cool todo app",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
  <div className="app">
    <h1>My todo list</h1>
      {/* {todos.map((todo, index) => (
        <TodoItem text={todo} key={index} />
        ))}  would do the same*/}
    {todos.map( todo => {
      return <TodoItem text={todo} />;
    })}
    <TodoForm addTodo={addTodo}/> 
      {/* The FIRST addTodo is the key, we will be accessing this with props.addTodo inthe TodoForm. The SECOND addTodo is the value, which we defined as a function in our App.jsx file. */}
  </div>
  )
}

export default App;
