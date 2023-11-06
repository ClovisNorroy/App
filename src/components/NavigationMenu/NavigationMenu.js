import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import styles from "./NavigationMenu.module.css";

function NavigationMenu() {
  const pages = [
    { href: "/", label: "Home" },
    { href: "/activities", label: "Activities" },
    { href: "/myprofile", label: "My Profile" },
    { href: "/login", label: "Login" },
    { href: "/signup", label: "Signup"}
  ];
  return (
    <AppBar position="static">
        <Toolbar>
          {pages.map((page) => (
            <Typography
              href={page.href}
              variant="h6"
              nowrap="true"
              component="a"
              sx={{ marginLeft: 2}}
              className={styles.appbarItem}
              key={page.label}
            >
              {page.label}
            </Typography>
          ))}
        </Toolbar>
    </AppBar>
  );
}

export default NavigationMenu;
