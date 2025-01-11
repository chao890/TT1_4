import { Dialog, DialogTitle, FormControl, InputLabel, TextField, Button, Select, MenuItem} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AddRequestModal = (
    {open, userCompany, setClose}
) => {
    //Other comapny, your company is passed in companyName
    const [requestTo, setRequestTo] = useState("");
    const [carbonPrice, setCarbonPrice] = useState(0);
    const [carbonQuantity, setCarbonQuantity] = useState(0);
    const [requestingReason, setRequestingReason] = useState("");
    const [requestType, setRequestType] = useState(null);

    const handleAdd = () => {
        const url = ""
        // axios.post(url, {

        // }).then(
        //     setClose()
        // )
        console.log(requestTo)
        console.log(requestType)

        setClose()
        setRequestTo("")
        setCarbonPrice(0)
        setCarbonQuantity(0)
        setRequestingReason("")
        setRequestType(null)
    }

    return (
        <Dialog open={open} >
            <DialogTitle>
                Add Request
            </DialogTitle>
            <form>
                <TextField label="Comapny Name" placeholder="Add Company Name" onChange={(e) => setCompanyName(e.target.value)}/>
                <TextField label="Requesting Reason" placeholder="Add Requesting Reason" onChange={(e) => setRequestingReason(e.target.value)}/>
                <TextField label="Carbon Price" placeholder="Add Carbon Price" onChange={(e) => setCarbonPrice(e.target.value)}/>
                <TextField label="Carbon Quantity" placeholder="Add Carbon Quantity" onChange={(e) => setCarbonQuantity(e.target.value)}/>
                <InputLabel id="request-type">Request Type</InputLabel>
                <Select labelId="request-type" id='qwe' label="Request Type" onChange={(e) => setRequestType(e.target.value)}>
                    <MenuItem value={"Buy"}>Buy</MenuItem>
                    <MenuItem value={"Sell"}>Sell</MenuItem>
                </Select>
            </form>
            <Button
                onClick={handleAdd}
            >
                Confirm
            </Button>   
            <Button
                onClick={setClose}
            >
                Cancel 
            </Button>
        </Dialog>
    )
} 

export default AddRequestModal;