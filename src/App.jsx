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
    {
      text: "Learn about React",
      isCompleted: false,
    },{
      text: "Meet a friend for lunch",
      isCompleted: false,
    },{
      text: "Build a really cool todo app",
      isCompleted: false,
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };


  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }




  return (
    <div className="app">
      <h1 className="todo-list">My todo list</h1>
        {todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo} />
          ))} 
{/* the first completeTodo is the key for when we use props. in our TodoItem. The second completeTodo is the value, the function we've just defined in our App.jsx file */}
      
      <TodoForm addTodo={addTodo} /> 
        {/* The FIRST addTodo is the key, we will be accessing this with props.addTodo inthe TodoForm. The SECOND addTodo is the value, which we defined as a function in our App.jsx file. */}
    </div>
  )
}

export default App;
