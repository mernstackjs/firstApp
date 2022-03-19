import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddBook() {
  const [data, setData] = useState({
    username: "",
    bookname: "",
    price: "",
    desc: "",
    image: "",
  });
  const navigate = useNavigate();
  const onChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };
  const [error, setEror] = useState("");
  const hadelClick = async () => {
    if (
      data.username === "" &&
      data.bookname === "" &&
      data.image === "" &&
      data.price === "" &&
      data.desc === ""
    ) {
      setEror("Fadlan wada buuxi");
      console.log("fadlan buuxi");
    } else {
      await axios.post("/books", data).then((res) => console.log(res.data));
      navigate("/Book-List");
    }
  };
  return (
    <Container maxWidth="md" sx={{ marginTop: "40px" }}>
      <Paper elevation={22} sx={{ padding: "30px" }}>
        <Typography sx={{ textAlign: "center", margin: "30px 0" }}>
          Waxa aad u baahantahay fadalan halkan ku soo qor
        </Typography>
        <Typography sx={{ textAlign: "center", padding: "10px", color: "red" }}>
          {error}
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="username"
              value={data.username}
              name="username"
              onChange={onChange}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              size="small"
              placeholder="bookname"
              value={data.bookname}
              name="bookname"
              onChange={onChange}
            />
          </Grid>
          <Grid item md={10}>
            <TextField
              fullWidth
              size="small"
              placeholder="url image"
              value={data.image}
              name="image"
              onChange={onChange}
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              fullWidth
              type="number"
              size="small"
              value={data.price}
              name="price"
              onChange={onChange}
              placeholder="price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              value={data.desc}
              name="desc"
              onChange={onChange}
              multiline
              rows={5}
              fullWidth
              size="small"
              placeholder="Inter Something about book"
            />
          </Grid>
          <Grid item md={12}>
            <Button fullWidth onClick={hadelClick}>
              Send to Me
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default AddBook;
