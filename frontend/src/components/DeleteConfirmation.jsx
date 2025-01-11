
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

            <Dialog
                open={open}
                
            >
                <DialogTitle>
                    Delete Confirmation
                </DialogTitle>
                <Typography>
                    Are your sure you want to delete this request with {companyName}?
                </Typography>   
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Button
                    onClick={handleDelete}
                >
                    Confirm
                </Button>   
                <Button
                    onClick={setClose}
                >
                    Cancel 
                </Button>
                </div>
            </Dialog>
        </div>
    )
}

export default DeleteConfirmationModal