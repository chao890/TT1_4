import { Dialog, DialogTitle, FormControl, InputLabel, TextField, Button, Select, MenuItem} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Container } from "@mui/material";

const AddRequestModal = (
    {open, userCompany, setClose}
) => {
    //Other comapny, your company is passed in companyName
    const [carbonPrice, setCarbonPrice] = useState(0);
    const [carbonQuantity, setCarbonQuantity] = useState(0);
    const [requestingReason, setRequestingReason] = useState("");
    const [requestType, setRequestType] = useState(null);
    const [userCompanyName, setCompanyName] = useState(userCompany);

    const handleAdd = () => {
        const url = ""
        // axios.post(url, {

        // }).then(
        //     setClose()
        // )
        console.log(userCompanyName)
        console.log(requestType)

        setClose()
        setCompanyName("")
        setCarbonPrice(0)
        setCarbonQuantity(0)
        setRequestingReason("")
        setRequestType(null)
    }

    return (
        <Dialog open={open} >
            <DialogTitle variant="h5">
                Add Request
            </DialogTitle>
            <Container>
            <Container >
                <TextField label="Company Name" placeholder="Add Company Name" onChange={(e) => setCompanyName(e.target.value)}/>
                <TextField label="Requesting Reason" placeholder="Add Requesting Reason" onChange={(e) => setRequestingReason(e.target.value)}/>
                <TextField label="Carbon Price" placeholder="Add Carbon Price" onChange={(e) => setCarbonPrice(e.target.value)}/>
                <TextField label="Carbon Quantity" placeholder="Add Carbon Quantity" onChange={(e) => setCarbonQuantity(e.target.value)}/>
                <InputLabel id="request-type">Request Type</InputLabel>
                <Select labelId="request-type" id='qwe' label="Request Type" onChange={(e) => setRequestType(e.target.value)}>
                    <MenuItem value={"Buy"}>Buy</MenuItem>
                    <MenuItem value={"Sell"}>Sell</MenuItem>
                </Select>
            </Container>
              
            <Button align="center"
                onClick={setClose}
                variant="outlined"
                color="error">
                Cancel 
            </Button>
            <Button
                onClick={handleAdd}
                color="success"
                variant="outlined"
            >
                Confirm
            </Button> 

            </Container>
            
        </Dialog>
    )
} 

export default AddRequestModal;