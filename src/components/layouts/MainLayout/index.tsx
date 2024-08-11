import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../organism/NavBar";
import SideBar from "../../organism/SideBar";
import { Box } from "@mui/material";

const MainLayout: React.FC = () => {
  return (
    <Box>
      <NavBar />
      <SideBar />
      <Box sx={{ ml: "260px", mt: "10px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
