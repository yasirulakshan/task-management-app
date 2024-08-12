import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Circle from "../../atoms/Circle";
import Count from "../../atoms/Count";
import { Add } from "iconsax-react";

const Tasks: React.FC = () => {
  return (
    <Box>
      <Card
        sx={{
          width: "364px",
          minHeight: "900px",
          backgroundColor: "whiteBg.500",
          borderRadius: "12px",
          mb: 2,
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23C8C8C8FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            mx: 2,
            width: "85%",
            mt: 2,
            p: 1,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Circle color="warning.main" />
          <Typography fontSize={20} fontWeight={600} sx={{ ml: 1 }}>
            Todo
          </Typography>
          <Count count={5} />
          <Add size="32" style={{ marginLeft: "auto" }} />
        </Box>
      </Card>
    </Box>
  );
};

export default Tasks;
