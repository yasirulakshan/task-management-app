import { Box } from "@mui/material";
import React from "react";

interface ICircleProps {
  color: string;
}

const Circle: React.FC<ICircleProps> = ({ color }) => {
  return (
    <Box
      sx={{
        border: 2,
        borderColor: color,
        borderRadius: 10,
        width: 15,
        height: 15,
        m: 1,
      }}
    />
  );
};

export default Circle;
