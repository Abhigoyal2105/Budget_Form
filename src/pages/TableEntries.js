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
  const [columnTotals, setColumnTotals] = useState({
    situation1: 0,
    situation2: 0,
    situation3: 0,
    situation4: 0,
  });

  useEffect(() => {
    const savedData = localStorage.getItem("expensesData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      const transformedData = Object.keys(parsedData).map((expenseName) => ({
        name: expenseName,
        situation1: parsedData[expenseName].situation1 || 0,
        situation2: parsedData[expenseName].situation2 || 0,
        situation3: parsedData[expenseName].situation3 || 0,
        situation4: parsedData[expenseName].situation4 || 0,
      }));

      setExpenses(transformedData);

      // Calculate column totals
      const totals = {
        situation1: 0,
        situation2: 0,
        situation3: 0,
        situation4: 0,
      };
      transformedData.forEach((expense) => {
        totals.situation1 += expense.situation1;
        totals.situation2 += expense.situation2;
        totals.situation3 += expense.situation3;
        totals.situation4 += expense.situation4;
      });

      setColumnTotals(totals);
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
                {expenses.length > 0 && (
                  <TableRow sx={tableRowStyles}>
                    <TableCell
                      sx={{ fontWeight: "bold", p: 0, fontSize: "17px" }}
                    >
                      Total
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>
                      {columnTotals.situation1}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>
                      {columnTotals.situation2}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>
                      {columnTotals.situation3}
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", fontSize: "17px" }}>
                      {columnTotals.situation4}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
}

export default TableEntries;
