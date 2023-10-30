import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Button,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const expenseNames = [
  "Rent/Mortgage",
  "Housing Voucher",
  "Real Estate Taxes",
  "Repairs/Maintenance",
  "Association Dues",
  "Homeowner/Renters Insurance",
  "Electricity",
  "Gas",
  "Water",
  "Trash",
  "Home Phone",
  "Internet & Cable",
  "Food: Grocery",
  "Food: Restaurant",
  "Laundry",
  "Other",
];

const initialExpenses = expenseNames.map((name) => ({
  name,
  situation1: localStorage.getItem(`${name}_situation1`) || "",
  situation2: localStorage.getItem(`${name}_situation2`) || "",
  situation3: localStorage.getItem(`${name}_situation3`) || "",
  situation4: localStorage.getItem(`${name}_situation4`) || "",
}));

const tableRowStyles = {
  "&:not(:last-child) > td": {
    borderBottom: "none",
  },
};

function ModalForm({ isOpen, onClose, onFormSubmit }) {
  const [expenses, setExpenses] = useState(initialExpenses);

  useEffect(() => {
    const localData = localStorage.getItem("expensesData");

    if (localData) {
      try {
        const parsedData = JSON.parse(localData);

        const updatedExpenses = initialExpenses.map((expense) => {
          const name = expense.name;
          if (parsedData[name]) {
            return {
              ...expense,
              situation1: parsedData[name].situation1 || "",
              situation2: parsedData[name].situation2 || "",
              situation3: parsedData[name].situation3 || "",
              situation4: parsedData[name].situation4 || "",
            };
          } else {
            return expense;
          }
        });

        setExpenses(updatedExpenses);
      } catch (error) {
        console.error("Error parsing data from local storage:", error);
      }
    }
  }, []);

  const handleExpenseChange = (index, field, value) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][field] = parseFloat(value);
    setExpenses(updatedExpenses);
  };

  const handleSave = () => {
    const savedValues = {};
    expenses.forEach((expense) => {
      savedValues[expense.name] = {
        situation1: expense.situation1,
        situation2: expense.situation2,
        situation3: expense.situation3,
        situation4: expense.situation4,
      };
    });
    onClose();

    localStorage.setItem("expensesData", JSON.stringify(savedValues));
    window.dispatchEvent(new Event("storageEvent"));

    onFormSubmit(savedValues);
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "78%",
          width: "70%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          border: 0,
        }}
      >
        <IconButton
          color="inherit"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: "2px",
            right: "1px",
          }}
        >
          <CloseIcon sx={{ border: "1px solid #EDA23E" }} />
        </IconButton>
        <Typography
          variant="h4"
          align="center"
          sx={{ p: 3, fontWeight: "bold" }}
        >
          Housing Expenses
        </Typography>
        <div style={{ overflowX: "auto" }}>
          <TableContainer component={Paper} sx={{ maxHeight: "60vh" }}>
            <Table>
              <TableHead sx={{ fontWeight: "bold" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    Housing Expenses
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    Current Situation
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    Situation 2
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    Situation 3
                  </TableCell>
                  <TableCell sx={{ borderBottom: "none", fontWeight: "bold" }}>
                    Situation 4
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {expenses.map((expense, index) => (
                  <TableRow key={index} sx={tableRowStyles}>
                    <TableCell sx={{ fontWeight: "bold", py: 2.3 }}>
                      {expense.name}
                    </TableCell>
                    <TableCell>
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        value={expense.situation1}
                        type="number"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (
                            inputValue === "" ||
                            (parseFloat(inputValue) >= 0 &&
                              /^[0-9]*(\.[0-9]{0,2})?$/.test(inputValue))
                          ) {
                            handleExpenseChange(
                              index,
                              "situation1",
                              inputValue
                            );
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        value={expense.situation2}
                        type="number"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (
                            inputValue === "" ||
                            (parseFloat(inputValue) >= 0 &&
                              /^[0-9]*(\.[0-9]{0,2})?$/.test(inputValue))
                          ) {
                            handleExpenseChange(
                              index,
                              "situation2",
                              inputValue
                            );
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        value={expense.situation3}
                        type="number"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (
                            inputValue === "" ||
                            (parseFloat(inputValue) >= 0 &&
                              /^[0-9]*(\.[0-9]{0,2})?$/.test(inputValue))
                          ) {
                            handleExpenseChange(
                              index,
                              "situation3",
                              inputValue
                            );
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                          ),
                        }}
                        value={expense.situation4}
                        type="number"
                        onChange={(e) => {
                          const inputValue = e.target.value;
                          if (
                            inputValue === "" ||
                            (parseFloat(inputValue) >= 0 &&
                              /^[0-9]*(\.[0-9]{0,2})?$/.test(inputValue))
                          ) {
                            handleExpenseChange(
                              index,
                              "situation4",
                              inputValue
                            );
                          }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Grid container justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#EDA23E",
                  fontWeight: "bold",
                  textTransform: "none",
                  mr: 2,
                }}
                onClick={handleSave}
              >
                Save
              </Button>
            </Grid>
          </TableContainer>
        </div>
      </Box>
    </Modal>
  );
}

export default ModalForm;
