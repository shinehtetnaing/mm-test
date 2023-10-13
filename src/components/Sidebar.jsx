import {
  Dashboard,
  Inventory,
  ManageAccounts,
  Person,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", link: "/", icon: <Dashboard /> },
  { text: "Product", link: "product", icon: <Inventory /> },
  { text: "Customer", link: "customer", icon: <Person /> },
  { text: "Setting", link: "setting", icon: <ManageAccounts /> },
];

const Sidebar = () => {
  return (
    <>
      <List>
        {menuItems.map((menuItem) => (
          <NavLink key={menuItem.text} to={menuItem.link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
