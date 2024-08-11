import React from "react";
import AppRouter from "./router";
import NavBar from "./components/organism/NavBar";
import { Box, Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <Box>
      <NavBar />
      <Container maxWidth="xl">
        <AppRouter />
      </Container>
    </Box>
  );
};

export default App;
