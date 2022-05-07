import React, { useState } from "react";
import TodoList from "./TodoList";
import { AppBar, Paper, Toolbar, Typography } from "@mui/material";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };
  return (
    <>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#fff",
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
          <Toolbar>
            <Typography color="inherit">Todos with Hooks</Typography>
          </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} />
      </Paper>
    </>
  );
}

export default TodoApp;

// - TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem
