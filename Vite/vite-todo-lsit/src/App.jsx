import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoContainer from "./components/TodoContainer";
import TodoFilter from "./components/TodoFilter";
import { STATUS } from "./config/status";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterStatus,setFilterStatus] = useState(`${STATUS.IS_CREATE},${STATUS.IS_DONE}`)

  const handleSubmit = (todoItem) => {
    setTodos([...todos, todoItem]);
    console.log("app", todos);
  };
  const handleOperate = (todoItem) => {
    console.log("operate", todoItem);
    const newTodos = todos.filter((todo) => todo.id !== todoItem.id);
    newTodos.push(todoItem);
    setTodos(newTodos);
  };
  const handleStatusChange = (status) => {
    console.log('handleStatusChange',status)
    setFilterStatus(status)
  }
  return (
    <div className="todo-app">
      <h2 className="todo-title">待办清单</h2>
      <TodoItem onSubmit={handleSubmit}></TodoItem>
      <TodoFilter filterStatus={filterStatus}  onFilterStatus={handleStatusChange}></TodoFilter>
      <TodoContainer filterStatus={filterStatus} onOperate={handleOperate} todos={todos}></TodoContainer>
    </div>
  );
}

export default App;
