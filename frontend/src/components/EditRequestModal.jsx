import { Dialog, DialogTitle, FormControl, InputLabel, TextField, Button, Select, MenuItem} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const EditRequestModal = (
    {open, userCompany, setClose, cName, cPrice, cQuantity, rReason, rType}
) => {
    //Other comapny, your company is passed in companyName
    const [requestTo, setRequestTo] = useState(cName);
    const [carbonPrice, setCarbonPrice] = useState(cPrice);
    const [carbonQuantity, setCarbonQuantity] = useState(cQuantity);
    const [requestingReason, setRequestingReason] = useState(rReason);
    const [requestType, setRequestType] = useState(rType);

    const handleEdit = () => {
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
                Edit Request
            </DialogTitle>
            <form>
                <TextField label="Company Name" placeholder="Add Company Name" value={cName} onChange={(e) => setRequestTo(e.target.value)}/>
                <TextField label="Requesting Reason" placeholder="Add Requesting Reason" value={rReason} onChange={(e) => setRequestingReason(e.target.value)}/>
                <TextField label="Carbon Price" placeholder="Add Carbon Price" value={cPrice} onChange={(e) => setCarbonPrice(e.target.value)}/>
                <TextField label="Carbon Quantity" placeholder="Add Carbon Quantity" value={cQuantity} onChange={(e) => setCarbonQuantity(e.target.value)}/>
                <InputLabel id="request-type" value={rType}>Request Type</InputLabel>
                <Select labelId="request-type" id='qwe' label="Request Type" onChange={(e) => setRequestType(e.target.value)}>
                    <MenuItem value={"Buy"}>Buy</MenuItem>
                    <MenuItem value={"Sell"}>Sell</MenuItem>
                </Select>
            </form>
            <Button align="center"
                onClick={setClose}
                variant="outlined"
                color="error">
                Cancel 
            </Button>

            <Button
                onClick={handleEdit}
                color="success"
                variant="outlined"
            >
                Confirm
            </Button> 
        </Dialog>
    )
} 

export default EditRequestModal;