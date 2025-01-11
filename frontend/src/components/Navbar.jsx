import React from "react";
import { AppBar, Link, Typography } from "@mui/material";
import companyLogo from "../assets/LogoFinal.png";
import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async (e) => {
    e.preventDefault();
    try {
        dispatch(setCredentials('invalid'));
        navigate('/');
        toast.success("Logout successful!");
    } catch (err) {
        toast.error(err?.data?.message || err.error);
    }
    };

  return (
    <AppBar position="static" style={{ background: '#CD3333' }}>
    <Box sx={{ flexGrow: 1, display: 'flex', padding: '10px', alignContent:"center", justifyContent:"center", gap: "20px"}}>
    <img src={companyLogo} alt="Company Logo" height="90px" sx={{marginTop: "40px"}}/> 
    <Typography variant="h4" component="div" sx={{display: 'flex', padding: '10px', marginTop:"10px",marginTop:"20px",}}>
        PBS
    </Typography> 

    <Typography variant="h7" component="div" sx={{ textAlign: 'center', display: 'flex', padding: '10px',marginTop:"30px",'&:hover': { color: 'black' } }}>
        <Link href="/home" color="inherit">
            HomePage
        </Link>
    </Typography>
    <Typography variant="h7" component="div" sx={{ flexGrow: 1, display: 'flex', padding: '10px',marginTop:"10px",marginTop:"30px",'&:hover': { color: 'black' } }}>
        <Link href="/requests" color="inherit">
            Requests
        </Link>
    </Typography>

    <div >
        <Typography variant="h7" component="div" sx={{display: "inline-block", marginTop:"10px",marginTop:"10px"}}>      
            <div align="center" sx={{display: "inline-block"}}>
             <AccountBoxIcon fontSize="medium"/>
             <p>Username</p>
            </div>
        </Typography>
    </div>
    <div > 
        <Typography variant="h7" component="div">      
            <div sx={{display: "inline-block"}}>
             <p>Cash Balances</p>
             <p>0.00</p>
            </div>
        </Typography>
    </div>
    <div >
        <Typography variant="h7" component="div">      
            <div sx={{display: "inline-block"}}>
             <p>Carbon Credits</p>
             <p>0.00</p>
            </div>
        </Typography>
    </div>

    <div>
        <Typography variant="h7" component="div" sx={{ flexGrow: 1, display: 'flex', padding: '10px',marginTop:"30px",'&:hover': { color: 'black' }  }}>
        <Link href="/" color="inherit">
         <LogoutIcon onClick={handleLogout} />
        </Link>
        </Typography>
    </div>
    </Box>
    </AppBar>
  );
}

export default Navbar;


