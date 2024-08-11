import { Drawer, Divider, List, Box, Typography } from "@mui/material";
import SideBarItem from "../../atoms/SideBarItem";
import { Home2 } from "iconsax-react";
import { ROUTES } from "../../../constants/routeConstants";

const SideBar: React.FC = () => {
  return (
    <Drawer
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        sx={{
          height: "72px",
          display: "flex",
          alignItems: "center",
          ml: 2,
          width: "240px",
        }}
      >
        <img src="/logo.png" alt="logo" width={40} />
        <Typography variant="h5" sx={{ ml: 1 }}>
          Code94 Labs
        </Typography>
      </Box>
      <Divider />
      <List>
        <SideBarItem
          text="Home"
          icon={<Home2 size="32" />}
          route={ROUTES.HOME}
        />
      </List>
    </Drawer>
  );
};

export default SideBar;
