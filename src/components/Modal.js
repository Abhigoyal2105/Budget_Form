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

const initialExpenses = [
  {
    name: "Rent/Mortgage",
    situation1: localStorage.getItem("Rent/Mortgage_situation1") || "",
    situation2: localStorage.getItem("Rent/Mortgage_situation2") || "",
    situation3: localStorage.getItem("Rent/Mortgage_situation3") || "",
    situation4: localStorage.getItem("Rent/Mortgage_situation4") || "",
  },
  {
    name: "Housing Voucher",
    situation1: localStorage.getItem("Housing_Voucher_situation1") || "",
    situation2: localStorage.getItem("Housing_Voucher_situation2") || "",
    situation3: localStorage.getItem("Housing_Voucher_situation3") || "",
    situation4: localStorage.getItem("Housing_Voucher_situation4") || "",
  },
  {
    name: "Real Estate Taxes",
    situation1: localStorage.getItem("Real_Estate_Taxes_situation1") || "",
    situation2: localStorage.getItem("Real_Estate_Taxes_situation2") || "",
    situation3: localStorage.getItem("Real_Estate_Taxes_situation3") || "",
    situation4: localStorage.getItem("Real_Estate_Taxes_situation4") || "",
  },
  {
    name: "Repairs/Maintenance",
    situation1: localStorage.getItem("Repairs/Maintenance_situation1") || "",
    situation2: localStorage.getItem("Repairs/Maintenance_situation2") || "",
    situation3: localStorage.getItem("Repairs/Maintenance_situation3") || "",
    situation4: localStorage.getItem("Repairs/Maintenance_situation4") || "",
  },
  {
    name: "Association Dues",
    situation1: localStorage.getItem("Association_Dues_situation1") || "",
    situation2: localStorage.getItem("Association_Dues_situation2") || "",
    situation3: localStorage.getItem("Association_Dues_situation3") || "",
    situation4: localStorage.getItem("Association_Dues_situation4") || "",
  },
  {
    name: "Homeowner/Renters Insurance",
    situation1:
      localStorage.getItem("Homeowner/Renters_Insurance_situation1") || "",
    situation2:
      localStorage.getItem("Homeowner/Renters_Insurance_situation2") || "",
    situation3:
      localStorage.getItem("Homeowner/Renters_Insurance_situation3") || "",
    situation4:
      localStorage.getItem("Homeowner/Renters_Insurance_situation4") || "",
  },
  {
    name: "Electricity",
    situation1: localStorage.getItem("Electricity_situation1") || "",
    situation2: localStorage.getItem("Electricity_situation2") || "",
    situation3: localStorage.getItem("Electricity_situation3") || "",
    situation4: localStorage.getItem("Electricity_situation4") || "",
  },
  {
    name: "Gas",
    situation1: localStorage.getItem("Gas_situation1") || "",
    situation2: localStorage.getItem("Gas_situation2") || "",
    situation3: localStorage.getItem("Gas_situation3") || "",
    situation4: localStorage.getItem("Gas_situation4") || "",
  },
  {
    name: "Water",
    situation1: localStorage.getItem("Water_situation1") || "",
    situation2: localStorage.getItem("Water_situation2") || "",
    situation3: localStorage.getItem("Water_situation3") || "",
    situation4: localStorage.getItem("Water_situation4") || "",
  },
  {
    name: "Trash",
    situation1: localStorage.getItem("Trash_situation1") || "",
    situation2: localStorage.getItem("Trash_situation2") || "",
    situation3: localStorage.getItem("Trash_situation3") || "",
    situation4: localStorage.getItem("Trash_situation4") || "",
  },
  {
    name: "Home Phone",
    situation1: localStorage.getItem("Home_Phone_situation1") || "",
    situation2: localStorage.getItem("Home_Phone_situation2") || "",
    situation3: localStorage.getItem("Home_Phone_situation3") || "",
    situation4: localStorage.getItem("Home_Phone_situation4") || "",
  },
  {
    name: "Internet & Cable",
    situation1: localStorage.getItem("Internet_&_Cable_situation1") || "",
    situation2: localStorage.getItem("Internet_&_Cable_situation2") || "",
    situation3: localStorage.getItem("Internet_&_Cable_situation3") || "",
    situation4: localStorage.getItem("Internet_&_Cable_situation4") || "",
  },
  {
    name: "Food: Grocery",
    situation1: localStorage.getItem("Food_Grocery_situation1") || "",
    situation2: localStorage.getItem("Food_Grocery_situation2") || "",
    situation3: localStorage.getItem("Food_Grocery_situation3") || "",
    situation4: localStorage.getItem("Food_Grocery_situation4") || "",
  },
  {
    name: "Food: Restaurant",
    situation1: localStorage.getItem("Food_Restaurant_situation1") || "",
    situation2: localStorage.getItem("Food_Restaurant_situation2") || "",
    situation3: localStorage.getItem("Food_Restaurant_situation3") || "",
    situation4: localStorage.getItem("Food_Restaurant_situation4") || "",
  },
  {
    name: "Laundry",
    situation1: localStorage.getItem("Laundry_situation1") || "",
    situation2: localStorage.getItem("Laundry_situation2") || "",
    situation3: localStorage.getItem("Laundry_situation3") || "",
    situation4: localStorage.getItem("Laundry_situation4") || "",
  },
  {
    name: "Other",
    situation1: localStorage.getItem("Other_situation1") || "",
    situation2: localStorage.getItem("Other_situation2") || "",
    situation3: localStorage.getItem("Other_situation3") || "",
    situation4: localStorage.getItem("Other_situation4") || "",
  },
];

const tableRowStyles = {
  "&:not(:last-child) > td": {
    borderBottom: "none",
  },
};

function ModalForm({ isOpen, onClose }) {
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
              situation1: parsedData[name].situation1 || null,
              situation2: parsedData[name].situation2 || null,
              situation3: parsedData[name].situation3 || null,
              situation4: parsedData[name].situation4 || null,
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
