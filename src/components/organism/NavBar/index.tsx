import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { InputAdornment, TextField } from "@mui/material";
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
