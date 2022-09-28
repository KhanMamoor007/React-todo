import React, { useState } from "react";
import AddTodo from "./AddTodo";

import { FormControl, Container, Button, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
function Todo() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task === "") {
      return "enter a value";
    } else {
      const newData = task;
      setData([...data, newData]);
      setTask("");
    }
  };

  const deleteItem = (a) => {
    const finalData = data.filter((curEle, index) => {
      return index !== a;
    });
    setData(finalData);
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form onSubmit={submitHandler}>
          <FormControl fullWidth={true}>
            <TextField
              label="I will do this"
              variant="standard"
              type="text"
              onChange={onChangeHandler}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 5 }}
              type="submit"
            >
              <Add />
              Add
            </Button>
          </FormControl>
        </form>
      </Container>

      {data.map((value, index) => {
        return (
          <AddTodo key={index} id={index} task={value} onSelect={deleteItem} />
        );
      })}
    </div>
  );
}

export default Todo;
