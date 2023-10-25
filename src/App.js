import React from "react";
import Grid from "@mui/material/Grid";
import ProjectHeading from "./pages/ProjectHeading";
import TableEntries from "./pages/TableEntries";

function App() {
  return (
    <div>
      <Grid sx={{ px: 2 }}>
        <ProjectHeading />
        <TableEntries  />
      </Grid>
    </div>
  );
}

export default App;
