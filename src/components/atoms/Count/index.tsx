import { Box, Typography } from "@mui/material";
import React from "react";

interface ICountProps {
  count: number;
}

const Count: React.FC<ICountProps> = ({ count }) => {
  return (
    <Box
      sx={{
        bgcolor: "primary.50",
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        ml: 2,
      }}
    >
      <Typography
        variant="body2"
        color="primary"
        fontWeight={600}
        sx={{ textAlign: "center" }}
      >
        {count}
      </Typography>
    </Box>
  );
};

export default Count;
