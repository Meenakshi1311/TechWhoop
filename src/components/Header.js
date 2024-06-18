/*import React from 'react';
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import Image from 'react-bootstrap/Image';
import { AppBar, Toolbar,Button,IconButton } from '@mui/material';
import { AlignHorizontalRight, ForkRight, Place, RampRight } from '@mui/icons-material';
import { alignProperty } from '@mui/material/styles/cssUtils';
//import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Image src="logo.png"   />
            <div>
                <Stack spacing={6} direction="row" >
      <Button variant="outlined">   Outlined</Button>
      <Button variant="contained" >Contained</Button>
      <Button variant="contained">Register</Button>
    </Stack>
    </div>
            </Toolbar>
        </AppBar>
    );
};*/
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Image from 'react-bootstrap/Image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Image src="logo.png"   />
          </Typography>
          <Stack spacing={5} direction="row" >
      <Button variant="outlined">   Outlined</Button>
      <Button variant="contained" >Login</Button>
      <Button variant="contained">Register</Button>
    </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


//export default Header;
