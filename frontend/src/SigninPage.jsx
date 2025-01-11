import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import axiosInstance from "./axiosInstance";

const SigninPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("am called");
    axiosInstance
      .post("/users/signin", {
        username: "admin",
        password: "admin",
      })
      .then((res) => {
        console.log("success");
      })
      .catch((err) => console.log(err, "error"));
    console.log("temp");
  };

  const temp = (e) => {
    e.preventDefault();
    console.log("testing called");
    axiosInstance
      .get("users/info")
      .then((res) => {
        console.log("success", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => handleSubmit(e)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            placeholder="Enter Username"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter Password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Sign In
          </Button>
        </Box>
        <Box
          component="form"
          onSubmit={(e) => temp(e)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Sign In
          </Button>
        </Box>
        <Grid2 container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid2 sx={{ ml: "auto" }}>
            <Link component={RouterLink} to="/signup">
              Sign up
            </Link>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
};

export default SigninPage;
