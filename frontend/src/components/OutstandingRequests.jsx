import React from "react";
import {Box} from "@mui/system";
import { Container } from "@mui/system";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowItem from "./RowItem";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const OutstandingRequests=()=>{
  return (
    <>
    <Box display="flex">
    <h1 style={{textAlign: "left", marginLeft: "20px"}}>
        Outstanding Requests
    </h1>
    <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}align="right" style={{marginLeft: "auto", marginRight: "20px", marginTop: "20px", marginBottom: "10px"}}>
        Add Request
    </Button>
    </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Request ID </TableCell>
            <TableCell align="right">Request Date</TableCell>
            <TableCell align="right">Company Name </TableCell>
            <TableCell align="right">Carbon Price&nbsp;(SGD/Tonne)</TableCell>
            <TableCell align="right">Carbon Quantity</TableCell>
            <TableCell align="right">Requesting Reason</TableCell>
            <TableCell align="right">Requesting Type (Buy/Sell) </TableCell>
            <TableCell align="right" sx={{marginLeft:"-10px"}} > Edit </TableCell>
            <TableCell align="right"> Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <RowItem row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default OutstandingRequests;