import { Box } from "@mui/material";
import React from "react";

import Section from "../../molecules/Section";

const Tasks: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: 4 }}>
      <Section title="Todo" count={5}></Section>
      <Section title="In Progress" count={5}></Section>
      <Section title="Completed" count={5}></Section>
    </Box>
  );
};

export default Tasks;
