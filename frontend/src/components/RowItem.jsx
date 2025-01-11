import React from "react";import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton
 } from "@mui/material";

const RowItem = ({row}) => {
    return(
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="center">{row.calories}</TableCell>
          <TableCell align="center">{row.fat}</TableCell>
          <TableCell align="center">{row.carbs}</TableCell>
          <TableCell align="center">{row.protein}</TableCell>

          <TableCell align="center">Reason</TableCell>
          <TableCell align="center">Buy/Sell</TableCell>

          <TableCell align="right">{<Box sx={{ width: 40, height: 40, backgroundColor: '#ADD8E6', borderRadius: '12px', marginLeft: "auto" }}>
                    <IconButton>
                     <EditIcon />
                    </IconButton>
                    </Box>}
          </TableCell>

          <TableCell align="right">{<Box sx={{ width: 40, height: 40, backgroundColor: '#FFCDD2', borderRadius: '12px', marginLeft: "auto" }}>
                    <IconButton>
                     <DeleteIcon />
                    </IconButton>
          </Box>}
          </TableCell>
          
        </TableRow>
    );

}

export default RowItem;