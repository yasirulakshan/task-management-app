import React from "react";
import AppRouter from "./router";
import NavBar from "./components/organism/NavBar";
import { Box } from "@mui/material";
import SideBar from "./components/organism/SideBar";

const App: React.FC = () => {
  return (
    <Box>
      <NavBar />
      <SideBar />
      <Box sx={{ ml: "260px", mt: "10px" }}>
        <AppRouter />
      </Box>
    </Box>
  );
};

export default App;
