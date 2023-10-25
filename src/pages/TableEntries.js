import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const tableRowStyles = {
  "&:not(:last-child) > td": {
    borderBottom: "none",
  },
};

function TableEntries() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("expensesData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      const transformedData = Object.keys(parsedData).map((expenseName) => ({
        name: expenseName,
        situation1: parsedData[expenseName].situation1 || "-",
        situation2: parsedData[expenseName].situation2 || "-",
        situation3: parsedData[expenseName].situation3 || "-",
        situation4: parsedData[expenseName].situation4 || "-",
      }));

      setExpenses(transformedData);
    }
  }, []);

  return (
    <div>
      <Box sx={{ px: 5 }}>
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ fontWeight: "bold" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                      pl: 0,
                    }}
                  >
                    Expense
                  </TableCell>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    Situation 1
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
                    <TableCell sx={{ fontWeight: "bold", p: 0 }}>
                      {expense.name}
                    </TableCell>
                    <TableCell>{expense.situation1}</TableCell>
                    <TableCell>{expense.situation2}</TableCell>
                    <TableCell>{expense.situation3}</TableCell>
                    <TableCell>{expense.situation4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
}

export default TableEntries;
