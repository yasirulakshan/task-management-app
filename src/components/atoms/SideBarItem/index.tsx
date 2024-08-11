import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

interface ISideBarItemProps {
  icon: React.ReactNode;
  text: string;
}

const SideBarItem: React.FC<ISideBarItemProps> = ({ text, icon }) => {
  return (
    <ListItem>
      <ListItemButton sx={{ bgcolor: "whiteBg.500", borderRadius: "8px" }}>
        <ListItemIcon sx={{ color: "dark.400", minWidth: 48 }}>
          {icon}
        </ListItemIcon>
        <ListItemText>
          <Typography fontSize={16} fontWeight={600} color="dark.400">
            {text}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;
