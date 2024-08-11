import React from "react";
import AppRouter from "./router";
import NavBar from "./components/organism/NavBar";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box sx={{ m: 0 }}>
      <NavBar />
      <AppRouter />
    </Box>
  );
};

export default App;
