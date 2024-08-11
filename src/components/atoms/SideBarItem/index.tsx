import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ISideBarItemProps {
  icon: React.ReactNode;
  text: string;
  route: string;
}

const SideBarItem: React.FC<ISideBarItemProps> = ({ text, icon, route }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log(route);
    navigate(route); // Replace 'route' with your actual route
  };

  return (
    <ListItem>
      <ListItemButton
        sx={{ bgcolor: "whiteBg.500", borderRadius: "8px" }}
        onClick={handleNavigation}
      >
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
