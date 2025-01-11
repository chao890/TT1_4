import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import Loader from '../components/Loader';

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [errors, setErrors] = useState({}); // Track validation errors

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const validate = () => {
    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = "Username is required.";
    }
    if (!companyName.trim()) {
      validationErrors.companyName = "Company name is required.";
    }
    if (!password) {
      validationErrors.password = "Password is required.";
    } else if (password.length < 4) {
      validationErrors.password = "Password must be at least 6 characters long.";
    }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // Return true if no errors
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!validate()) {
  //     return; // Stop submission if validation fails
  //   }

  //   try {
  //     const response = await axiosInstance.post("/users/signin", {
  //       username,
  //       password,
  //       companyName,
  //     });
  //     toast.success("Signin successful!");
  //     // Redirect or update UI based on successful sign-in
  //   } catch (error) {
  //     console.error("Signin error:", error.response?.data || error.message);
  //     toast.error("Invalid username, company name, or password.");
  //   }
  // };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validate()) {
        return; // Stop submission if validation fails
      }
      // const res = await login({ username, password, companyName }).unwrap();
      // dispatch(setCredentials({ ...res }));
      await login({ username, password, companyName });
      navigate('/');
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
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
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            placeholder="Enter Username"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={Boolean(errors.username)}
            helperText={errors.username}
          />
          <TextField
            placeholder="Enter Company Name"
            fullWidth
            required
            sx={{ mb: 2 }}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            error={Boolean(errors.companyName)}
            helperText={errors.companyName}
          />
          <TextField
            placeholder="Enter Password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          {isLoading && <Loader />}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SigninPage;
