import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import navbarStyle from '../Themes/Navbar.module.css';
import logo from "../Image/logoonly.png";

export default function Navbar({ setLoginStatus, loginStatus }) {
 
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={navbarStyle.toolbar}>
          <Typography variant="h6">
            <img className={navbarStyle.logo} src={logo} alt="logo" />
          </Typography>
          <Typography variant="h6">
            EverestWalk Groups
          </Typography>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}
