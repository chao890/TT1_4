
import { Button, Dialog, Typography } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";


const DeleteConfirmationModal = (
    {companyName, open, setClose }
) => {

    const handleDelete = () => {
        const url = ""
        // axios.delete(url, {headers: {

        // }, data: {
        //     companyName
        // } }).then(
        //     setClose()
        // )
        setClose()
    }

    return (   
        <div>

            <Dialog open={open} maxWidth="sm" fullWidth>
                <DialogTitle>
                    Delete Confirmation
                </DialogTitle>
                <Typography variant="h7" sx={{marginLeft:"25px", marginTop:"5px", marginBottom:"15px"}}>
                    Are your sure you want to delete this request to {companyName}?
                </Typography>   
                <div style={{display:'flex', justifyContent:'space-between', alignContent:'center', margin:'20px'}}>
                  
                <Button
                    onClick={setClose}
                    variant="outlined"
                >
                    Cancel 
                </Button>
                <Button
                    onClick={handleDelete}
                    color="error"
                    variant="contained" >
                    Confirm
                </Button> 
                </div>
            </Dialog>
        </div>
    )
}

export default DeleteConfirmationModal