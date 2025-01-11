import { Button, Typography } from "@mui/material";
import { useState } from "react"
import DeleteConfirmationModal from "../components/DeleteConfirmation";
import AddRequestModal from "../components/AddRequestModal"

const TestPage = () => {
    const [open, setOpen] = useState(false)
    const setOpenDelete = () => setOpen(true);
    const setOnClose = () => setOpen(false);

    const [openA, setOpenA] = useState(false)
    const setOpenAdd = () => setOpenA(true);
    const setOnCloseA = () => setOpenA(false);

    return (
        <div>
            <Typography>test page</Typography>
            <Button onClick={setOpenDelete}> Press</Button>
            <DeleteConfirmationModal companyName={"testing"} open={open} setClose={setOnClose}/>

            <Button onClick={setOpenAdd}>Press 2 </Button>
            <AddRequestModal companyName={"testing"} open={openA}  setClose = {setOnCloseA} />
        </div>
    )
}

export default TestPage