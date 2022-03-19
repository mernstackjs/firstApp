import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  CardMedia,
  Paper,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { ContextContainer } from "../Context/BookContext";
function SingleBook() {
  const { id } = useParams();

  const [data] = useContext(ContextContainer);
  console.log(data);
  return (
    <div>
      {data
        .filter((item) => item._id === id)
        .map((item) => (
          <Paper
            key={item._id}
            sx={{ margin: "30px", width: "800px" }}
            elevation={22}
          >
            <Card>
              <CardMedia
                component="img"
                src={item.image}
                alt="sawir"
                height="200px"
              />
              <CardContent>
                <Typography>{item.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button>AddToCard</Button>
              </CardActions>
            </Card>
          </Paper>
        ))}
    </div>
  );
}

export default SingleBook;
