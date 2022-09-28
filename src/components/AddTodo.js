import React from "react";
import { Card, CardContent, Typography, Container } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function ShowTodo(props) {
  return (
    <div>
      <Container maxWidth="sm">
        <Card
          className="root"
          variant="outlined"
          style={{ marginTop: 35, background: "lightgray" }}
        >
          <CardContent>
            <Typography variant="h5" component="h2" color="green">
              {props.task}
              <IconButton aria-label="delete" style={{ float: "right" }}>
                <DeleteIcon
                  style={{ color: "red" }}
                  onClick={() => {
                    props.onSelect(props.id);
                    console.log(props.onSelect);
                  }}
                />
              </IconButton>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default ShowTodo;
