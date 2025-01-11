import React from "react";
import { AppBar, Link, Typography } from "@mui/material";
import companyLogo from "../assets/logo.png";
import { Box } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const Navbar = () => {
  return (
    <AppBar position="static">
    <Box sx={{ flexGrow: 1, display: 'flex', padding: '10px', alignContent:"center", justifyContent:"center", gap: "20px"}}>
    <img src={companyLogo} alt="Company Logo" height="80px" sx={{marginTop: "40px"}}/> 
    <Typography variant="h4" component="div" sx={{display: 'flex', padding: '10px', marginTop:"10px",marginTop:"20px",}}>
        PBS
    </Typography> 

    <Typography variant="h7" component="div" sx={{ textAlign: 'center', display: 'flex', padding: '10px',marginTop:"30px",'&:hover': { color: 'grey' } }}>
        <Link href="/home" color="inherit">
            HomePage
        </Link>
    </Typography>
    <Typography variant="h7" component="div" sx={{ flexGrow: 1, display: 'flex', padding: '10px',marginTop:"10px",marginTop:"30px",'&:hover': { color: 'gray' } }}>
        <Link href="/requests" color="inherit">
            Requests
        </Link>
    </Typography>

    <div >
        <Typography variant="h7" component="div" sx={{display: "inline-block", marginTop:"10px"}}>      
            <div sx={{display: "inline-block"}}>
             <AccountBoxIcon />
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
        <Typography variant="h7" component="div" sx={{ flexGrow: 1, display: 'flex', padding: '10px',marginTop:"30px",'&:hover': { color: 'gray' }  }}>
        <Link href="/" color="inherit">
         <LogoutIcon />
        </Link>
        </Typography>
    </div>
    </Box>
    </AppBar>
  );
}

export default Navbar;


