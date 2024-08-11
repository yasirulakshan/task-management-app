import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const NavBar: React.FC = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", height: "72px" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
              height: "40px",
              color: "text.primary",
              borderColor: "whiteBg.500",
              boxShadow: "0px 0px 8px #d9d9d9, -20px -20px 60px #ffffff",
            }}
          >
            Add Task
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
