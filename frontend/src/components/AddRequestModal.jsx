import {
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Container } from "@mui/material";

const AddRequestModal = ({ open, userCompany, setClose }) => {
  //Other comapny, your company is passed in companyName
  const [companyName, setCompanyName] = useState("");
  const [carbonPrice, setCarbonPrice] = useState("");
  const [carbonQuantity, setCarbonQuantity] = useState("");
  const [requestingReason, setRequestingReason] = useState("");
  const [requestType, setRequestType] = useState("");
  const [errors, setErrors] = useState({});

  const handleAdd = () => {
    const url = "";

    if (validateInputs()) {
      // Call here
      axios.post("/users/requests/createRequest", {
        companyName: "test",
        requestorCompanyName: companyName,
        carbonUnitPrice: carbonPrice,
        carbonQuantity: carbonQuantity,
        requestReason: requestingReason,
        requestType: requestType,
      });

      console.log("sent api");
      setClose();
      setCompanyName("");
      setCarbonPrice("");
      setCarbonQuantity("");
      setRequestingReason("");
      setRequestType("");
      setErrors({});
    } else {
      console.log("cannot send");
    }
  };

  const validateInputs = () => {
    const validationErrors = {};
    if (!companyName.trim()) {
      validationErrors.companyName = "Company Name is Required";
    }
    if (!carbonPrice.trim()) {
      validationErrors.carbonPrice = "Carbon Price is Required";
    } else {
      const trimmedCarbonPrice = carbonPrice.trim();
      if (isNaN(trimmedCarbonPrice) || parseInt(trimmedCarbonPrice) <= 0) {
        validationErrors.carbonPrice =
          "Carbon Price needs to be a positive number";
      }
    }
    if (!carbonQuantity.trim()) {
      validationErrors.carbonQuantity = "Carbon Quantity is Required";
    } else {
      const trimmedCarbonQuantity = carbonQuantity.trim();
      if (
        isNaN(trimmedCarbonQuantity) ||
        parseInt(trimmedCarbonQuantity) <= 0
      ) {
        validationErrors.carbonQuantity =
          "Carbon Price needs to be a positive number";
      }
    }
    if (!requestingReason.trim()) {
      validationErrors.requestingReason = "Requesting Reason is Required";
    }
    if (!requestType.trim()) {
      validationErrors.requestType = "Request Type is Required";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  return (
    <Dialog open={open}>
      <DialogTitle variant="h5">Add Request</DialogTitle>
      <Container>
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            style={{ margin: 10 }}
            label="Comapny Name"
            placeholder="Add Company Name"
            onChange={(e) => setCompanyName(e.target.value)}
            error={Boolean(errors.companyName)}
            helperText={errors.companyName}
          />
          <TextField
            style={{ margin: 10 }}
            label="Requesting Reason"
            placeholder="Add Requesting Reason"
            onChange={(e) => setRequestingReason(e.target.value)}
            error={Boolean(errors.requestingReason)}
            helperText={errors.requestingReason}
          />
          <TextField
            style={{ margin: 10 }}
            label="Carbon Price"
            placeholder="Add Carbon Price"
            onChange={(e) => setCarbonPrice(e.target.value)}
            error={Boolean(errors.carbonPrice)}
            helperText={errors.carbonPrice}
          />
          <TextField
            style={{ margin: 10 }}
            label="Carbon Quantity"
            placeholder="Add Carbon Quantity"
            onChange={(e) => setCarbonQuantity(e.target.value)}
            error={Boolean(errors.carbonQuantity)}
            helperText={errors.carbonQuantity}
          />
          <TextField
            style={{ margin: 10 }}
            label="Request Type"
            placeholder="Add Request Type"
            onChange={(e) => setRequestType(e.target.value)}
            error={Boolean(errors.requestType)}
            helperText={errors.requestType}
          />
        </Container>

        <Button
          align="center"
          onClick={() => {
            setClose();
            setCompanyName("");
            setCarbonPrice("");
            setCarbonQuantity("");
            setRequestingReason("");
            setRequestType("");
            setErrors({});
          }}
          variant="outlined"
          color="error"
        >
          Cancel
        </Button>
        <Button onClick={handleAdd} color="success" variant="outlined">
          Confirm
        </Button>
      </Container>
    </Dialog>
  );
};

export default AddRequestModal;
