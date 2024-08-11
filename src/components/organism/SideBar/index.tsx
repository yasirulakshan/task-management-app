import { Drawer, Divider, List, Box, Typography } from "@mui/material";
import SideBarItem from "../../atoms/SideBarItem";
import {
  Diagram,
  Home2,
  LampCharge,
  NotificationBing,
  Setting2,
  TaskSquare,
} from "iconsax-react";
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
        <SideBarItem
          text="Tasks"
          icon={<TaskSquare size="32" />}
          route={ROUTES.TASKS}
        />
        <SideBarItem
          text="Report"
          icon={<Diagram size="32" />}
          route={ROUTES.REPORT}
        />
        <SideBarItem
          text="Insights"
          icon={<LampCharge size="32" />}
          route={ROUTES.INSIGHTS}
        />
        <SideBarItem
          text="Inbox"
          icon={<NotificationBing size="32" />}
          route={ROUTES.INBOX}
        />
        <SideBarItem
          text="Settings"
          icon={<Setting2 size="32" />}
          route={ROUTES.SETTINGS}
        />
      </List>
    </Drawer>
  );
};

export default SideBar;
