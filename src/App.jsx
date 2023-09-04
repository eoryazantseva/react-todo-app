import { useState } from "react";

//  import { useState } from "react";
// useState

// import React from "react";
// React.useState

import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet a friend for lunch",
    "Build a really cool todo app",
  ]);

  return (
  <>
    <h1>My todo list</h1>
{/* {todos.map((todo, index) => (
  <TodoItem text={todo} key={index} />
))}  would do the same*/}
    {todos.map( todo => {
      return <TodoItem text={todo} />;
    })}
  </>
  )
}

export default App;
