import EnhancedTable from './components/requestTable'
import {
  Box,
  Avatar,
  Button,
  Container,
  Grid2,
  Link,
  TextField,
} from "@mui/material";

import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue, red } from '@mui/material/colors';
import ErrorIcon from '@mui/icons-material/Error';

const alerts = [
  'Overdue request 12: You have yet to approve TechTrek 2025 Pte Ltd’s request to sell 3.5 units of carbon at $500.25.',
  'test'
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Overdue Requests</DialogTitle>
      <List sx={{ pt: 0 }}>
        {alerts.map((email) => (
          <ListItem disablePadding key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: red[100], color: red[600] }}>
                  <ErrorIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* <ListItem disablePadding>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState(alerts[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      {/* <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography> */}
      
      <Container 
        maxWidth="m" 
        sx={{ p: 2}}
      >
        <br />
        
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        />
        
      
        <EnhancedTable/>
        <Button variant="outlined" onClick={handleClickOpen}>
          Overdue Requests
        </Button>
      </Container>
    </div>
  );
}
