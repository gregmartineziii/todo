import React, {useState} from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";
//useless comment
function App() {
  return (
    <div className="App">
      <header>
        <h1>Brady's ToDo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
