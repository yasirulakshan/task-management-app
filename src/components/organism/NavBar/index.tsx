import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            sx={{ minWidth: "300px", width: "40%" }}
            placeholder="Search Tasks"
          />
          <Button
            variant="outlined"
            sx={{
              borderRadius: "100px",
              height: "54px",
              color: "text.primary",
              borderColor: "whiteBg.500",
              boxShadow: "0px 0px 8px #d9d9d9, -20px -20px 60px #ffffff",
            }}
          >
            <MenuIcon />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "32px",
                // height: "32px",
                borderRadius: "100px",
                border: 1,
                borderColor: "whiteBg.500",
                padding: "5px",
              }}
            >
              <img src="/logo.png" alt="logo" width={20} height={20} />
            </Box>
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
