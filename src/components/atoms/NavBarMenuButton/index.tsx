import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Box } from "@mui/material";

const NavBarMenuButton: React.FC = () => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: "100px",
        height: "54px",
        color: "text.primary",
        borderColor: "whiteBg.500",
        boxShadow: "0px 0px 8px #d9d9d9, -20px -20px 60px #ffffff",
        ml: 5,
      }}
    >
      <MenuIcon sx={{ pl: 1 }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
          ml: 1,
          borderRadius: "100px",
          border: 1,
          borderColor: "whiteBg.500",
          padding: "5px",
        }}
      >
        <img src="/logo.png" alt="logo" width={20} height={20} />
      </Box>
    </Button>
  );
};

export default NavBarMenuButton;
