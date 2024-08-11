import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ISideBarItemProps {
  icon: React.ReactNode;
  text: string;
  route: string;
}

const SideBarItem: React.FC<ISideBarItemProps> = ({ text, icon, route }) => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState(false);
  const location = window.location.pathname;

  const handleNavigation = () => {
    navigate(route);
  };

  useEffect(() => {
    if (window.location.pathname === route) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, route]);

  return (
    <ListItem>
      <ListItemButton
        sx={{
          bgcolor: isActive ? "primary.main" : "whiteBg.500",
          borderRadius: "8px",
        }}
        onClick={handleNavigation}
      >
        <ListItemIcon
          sx={{ color: isActive ? "white" : "dark.400", minWidth: 48 }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText>
          <Typography
            fontSize={16}
            fontWeight={600}
            color={isActive ? "white" : "dark.400"}
          >
            {text}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SideBarItem;
