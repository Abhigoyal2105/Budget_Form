import React from "react";
import Grid from "@mui/material/Grid";
import FormButton from "../components/FormButton";

function ProjectHeading() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={8}>
        <h2 style={{ fontFamily: "Inter, sans-serif" }}>
          Section 2 - Household Expenses
        </h2>
      </Grid>
      <Grid item xs={4} container justifyContent="flex-end" sx={{ pt: 2 }}>
        <FormButton />
      </Grid>
    </Grid>
  );
}

export default ProjectHeading;
