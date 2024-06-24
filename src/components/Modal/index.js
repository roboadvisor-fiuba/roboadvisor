import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import MDTypography from "components/MDTypography";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function Modal({ open, setOpen, title, subtitle, label, createLabel }) {
  const [portfolioName, setPortfolioName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setOpen(false);
    setPortfolioName("");
    setErrorMessage("");
  };

  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", portfolioName);
      debugger;

      const response = await axios.post("http://127.0.0.1:5000/api/v1/portfolios", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      handleClose();
      setPortfolioName("");
    } catch (error) {
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "An error occurred during creation of portfolio."
        );
      } else {
        debugger;
        setErrorMessage("The server may be down or your network is not configured correctly.");
      }
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={label}
            type="text"
            fullWidth
            variant="standard"
            value={portfolioName}
            onChange={(e) => setPortfolioName(e.target.value)}
          />
          {errorMessage && (
            <MDTypography color="error" textAlign="center">
              {errorMessage}
            </MDTypography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleCreate}>{createLabel}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Modal;
