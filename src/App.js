import React from "react";
import Todo from "./components/Todo";
import { Link } from "@material-ui/core";
function App() {
  const link = {
    float: "right",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "monospace",
  };
  return (
    <div>
      <Link
        href="https://github.com/KhanMamoor007/React-todo"
        target="_blank"
        color="error"
        style={link}
      >
        Mamoor TODO
      </Link>
      <Todo />
    </div>
  );
}

export default App;
