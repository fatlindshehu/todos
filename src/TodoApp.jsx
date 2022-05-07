import React, { useState } from "react";
import TodoList from "./TodoList";
import { AppBar, Paper, Toolbar, Typography } from "@mui/material";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
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
          <TodoList todos={todos} />
        </AppBar>
      </Paper>
    </>
  );
}

export default TodoApp;

// - TodoApp
//     -TodoForm
//     -TodoList
//         -TodoItem
