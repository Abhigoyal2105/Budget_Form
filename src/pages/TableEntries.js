import React from "react";
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

const expenses = [
  {
    name: "Rent/Mortgage",
    situation1: "$12",
    situation2: "$213",
    situation3: "$3",
    situation4: "$231",
  },
  {
    name: "Housing Voucher",
    situation1: "$2",
    situation2: "$2",
    situation3: "$23121",
    situation4: "$231",
  },
  {
    name: "Real Estate Taxes",
    situation1: "$22",
    situation2: "$22313",
    situation3: "$21",
    situation4: "$231",
  },
  {
    name: "Repairs/Maintenance",
    situation1: "$23213",
    situation2: "$231",
    situation3: "$2121321",
    situation4: "$2312",
  },
  {
    name: "Association Dues",
    situation1: "$213",
    situation2: "$231",
    situation3: "$3231",
    situation4: "$231231",
  },
  {
    name: "Homeowner/Renters Insurance",
    situation1: "$212",
    situation2: "$231",
    situation3: "$213",
    situation4: "$213",
  },
  {
    name: "Electricity",
    situation1: "$213",
    situation2: "$312",
    situation3: "$213231",
    situation4: "$31",
  },
  {
    name: "Gas",
    situation1: "$231",
    situation2: "$31231",
    situation3: "$231",
    situation4: "$231",
  },
  {
    name: "Water",
    situation1: "$213231",
    situation2: "$2132",
    situation3: "$21",
    situation4: "$213",
  },
  {
    name: "Trash",
    situation1: "$3",
    situation2: "$2121",
    situation3: "$321",
    situation4: "$231",
  },
  {
    name: "Home Phone",
    situation1: "$3231",
    situation2: "$213",
    situation3: "$212",
    situation4: "$21",
  },
  {
    name: "Internet & Cable",
    situation1: "$2121",
    situation2: "$209",
    situation3: "$213231",
    situation4: "$321",
  },
  {
    name: "Food: Grocery",
    situation1: "$213",
    situation2: "$21",
    situation3: "$3231",
    situation4: "$23",
  },
  {
    name: "Food: Restaurant",
    situation1: "$2121",
    situation2: "$2121",
    situation3: "$1213",
    situation4: "$231",
  },
  {
    name: "Laundry",
    situation1: "$2313213",
    situation2: "$213",
    situation3: "$23121321",
    situation4: "$213231",
  },
  {
    name: "Other",
    situation1: "$213231231",
    situation2: "$223113",
    situation3: "$12",
    situation4: "$32321",
  },
];

const tableRowStyles = {
  "&:not(:last-child) > td": {
    borderBottom: "none",
  },
};

function TableEntries() {
  return (
    <div>
      <Box sx={{px:5}}>
        <div>
          <TableContainer component={Paper} >
            <Table>
              <TableHead sx={{ fontWeight: "bold" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      borderBottom: "none",
                      fontWeight: "bold",
                      fontSize: "17px",
                      pl:0,
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
                    <TableCell sx={{ fontWeight: "bold", p:0 }}>
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