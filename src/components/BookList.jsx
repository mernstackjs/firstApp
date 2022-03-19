import React, { useContext } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ContextContainer } from "../Context/BookContext";
function BookList() {
  const [data] = useContext(ContextContainer);
  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((item) => (
          <Grid key={item._id} item md={6}>
            <Card>
              <CardMedia src={item.image} component="img" height="194" />
              <CardContent>
                <Typography>
                  <Link to={`/book/${item._id}`}>{item.bookname}</Link>
                </Typography>
                <Typography>
                  {item.desc.length < 60
                    ? item.desc
                    : `${item.desc.slice(0, 60)}...`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default BookList;
