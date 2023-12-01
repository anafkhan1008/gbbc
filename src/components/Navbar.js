import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../styles/Home.module.css";

// ... (import statements)

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { title: "Join", link: "/" },
    { title: "Programs", link: "/about" },
    { title: "Engage", link: "/services" },
    { title: "Explore", link: "/contact" },
    { title: "Policy", link: "/contact" },
  ];

  return (
    <>
      <AppBar position="static" className={styles.appbar}  >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'  }} >
          <Image src="/static/logo.png" width={149.638} height={59} padding ={16} />
          {isMobile ? (
            <>
              <div style={{ flexGrow: 1 }} />
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              {navLinks.map((link, index) => (
                <Grid item key={index}>
                  <List>
                    <ListItem sx={{padding: "12px 16px"}}  >
                      <ListItemText primary={link.title} className={styles.appmenu}/>
                      <ExpandMoreIcon />
                    </ListItem>
                  </List>
                </Grid>
              ))}
              <Grid item>
              </Grid>
            </Grid>
          )}
         
          {!isMobile && <Button className={styles.appbutton}>Login</Button>}
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {navLinks.map((link, index) => (
            <ListItem key={index}>
              <ListItemText primary={link.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
