import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { InputAdornment, TextField } from "@mui/material";
import NavBarMenuButton from "../../atoms/NavBarMenuButton";
import { SearchNormal1 } from "iconsax-react";

const NavBar: React.FC = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
            ml: "240px",
          }}
        >
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchNormal1 size="26" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            sx={{ minWidth: "300px", width: "40%" }}
            placeholder="Search Tasks"
          />
          <NavBarMenuButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
