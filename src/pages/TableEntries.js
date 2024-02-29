import React, { useEffect, useState, useRef } from "react";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const containerStyles = {
  padding: "20px",
};

const tableRowStyles = {
  "&:not(:last-child) > td": {
    borderBottom: "none",
  },
};

function TableEntries({ formData }) {
  const componentRef = useRef(null);

  const [expenses, setExpenses] = useState([]);
  const [columnTotals, setColumnTotals] = useState({
    situation1: 0,
    situation2: 0,
    situation3: 0,
    situation4: 0,
  });

  const calculateTotals = (data) => {
    const totals = {
      situation1: 0,
      situation2: 0,
      situation3: 0,
      situation4: 0,
    };
    data.forEach((expense) => {
      totals.situation1 += expense.situation1;
      totals.situation2 += expense.situation2;
      totals.situation3 += expense.situation3;
      totals.situation4 += expense.situation4;
    });
    return totals;
  };

  useEffect(() => {
    if (formData) {
      const transformedData = Object.keys(formData).map((expenseName) => ({
        name: expenseName,
        situation1: formData[expenseName].situation1 || 0,
        situation2: formData[expenseName].situation2 || 0,
        situation3: formData[expenseName].situation3 || 0,
        situation4: formData[expenseName].situation4 || 0,
      }));

      setExpenses(transformedData);

      const totals = calculateTotals(transformedData);
      setColumnTotals(totals);
    } else {
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

        const totals = calculateTotals(transformedData);
        setColumnTotals(totals);
      }
    }
  }, [formData]);

  const handleDownloadPDF = () => {
    if (componentRef.current) {
      html2canvas(componentRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "legal");

        const margin = 40;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(
          imgData,
          "PNG",
          margin,
          margin,
          pdfWidth - 2 * margin,
          pdfHeight - 2 * margin
        );

        pdf.save("table_entries.pdf");
      });
    }
  };

  return (
    <div>
      <Box sx={{ px: 5 }}>
        <div ref={componentRef} style={containerStyles}>
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
                    <TableCell sx={{ fontWeight: "bold", p: 0 }}>
                      {expense.name}
                    </TableCell>
                    <TableCell>
                      {expense.situation1 > 0 ? `$ ${expense.situation1}` : "-"}
                    </TableCell>
                    <TableCell>
                      {expense.situation2 > 0 ? `$ ${expense.situation2}` : "-"}
                    </TableCell>
                    <TableCell>
                      {expense.situation3 > 0 ? `$ ${expense.situation3}` : "-"}
                    </TableCell>
                    <TableCell>
                      {expense.situation4 > 0 ? `$ ${expense.situation4}` : "-"}
                    </TableCell>
                  </TableRow>
                ))}
                {expenses.length > 0 && (
                  <TableRow sx={tableRowStyles}>
                    <TableCell sx={{ fontWeight: "bold", p: 0 }}>
                      Total Housing & Utility Expenses
                    </TableCell>
                    <TableCell>
                      {columnTotals.situation1 > 0
                        ? `$ ${columnTotals.situation1}`
                        : "$ 0"}
                    </TableCell>
                    <TableCell>
                      {columnTotals.situation2 > 0
                        ? `$ ${columnTotals.situation2}`
                        : "$ 0"}
                    </TableCell>
                    <TableCell>
                      {columnTotals.situation3 > 0
                        ? `$ ${columnTotals.situation3}`
                        : "$ 0"}
                    </TableCell>
                    <TableCell>
                      {columnTotals.situation4 > 0
                        ? `$ ${columnTotals.situation4}`
                        : "$ 0"}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button onClick={handleDownloadPDF} variant="outlined">
          Download PDF
        </Button>
      </Box>
    </div>
  );
}

export default TableEntries;
