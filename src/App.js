import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ProjectHeading from "./pages/ProjectHeading";
import TableEntries from "./pages/TableEntries";

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormDataChange = (data) => {
    console.log("heloeoe");
    setFormData(data);
  };

  return (
    <div>
      <Grid sx={{ px: 2 }}>
        <ProjectHeading onFormDataChange={handleFormDataChange} />
        <TableEntries formData={formData} />
      </Grid>
    </div>
  );
}

export default App;
