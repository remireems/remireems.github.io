// import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Tabs, Tab } from '@mui/material'
import {MenuIcon } from '@mui/icons-material';

import './Navbar.css'

const pages = ['About', 'Projects', 'Contact', 'Resume'];

const Navbar = () => {

  // return (
  //   <div className="navSec">
  //     <Navbar bg="light" expand="lg" id='navStyle'>
  //       <Container id='navCont'>
  //         <Navbar.Brand href="/Intro">RK</Navbar.Brand>
  //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //         <Navbar.Collapse id="basic-navbar-nav">
  //           <Nav className="me-auto">
  //             <Nav.Link href="/About">About</Nav.Link>
  //             <Nav.Link href="/Projects">Projects</Nav.Link>
  //             <Nav.Link href="/Contact">Contact</Nav.Link>
  //             <Button>Resume</Button>              
  //           </Nav>
  //         </Navbar.Collapse>
  //       </Container>
  //     </Navbar>
  //   </div>
  // )

  // const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  // return (
  //   <AppBar position="fixed">
  //     <Container maxWidth="xl">
  //       <Toolbar disableGutters>
  //         <Typography
  //           variant="h6"
  //           noWrap
  //           component="div"
  //           sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
  //         >
  //           LOGO
  //         </Typography>

  //         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
  //           <IconButton
  //             size="large"
  //             aria-label="account of current user"
  //             aria-controls="menu-appbar"
  //             aria-haspopup="true"
  //             onClick={handleOpenNavMenu}
  //             color="inherit"
  //           >
  //             <MenuIcon />
  //           </IconButton>
  //           <Menu
  //             id="menu-appbar"
  //             anchorEl={anchorElNav}
  //             anchorOrigin={{
  //               vertical: 'bottom',
  //               horizontal: 'left',
  //             }}
  //             keepMounted
  //             transformOrigin={{
  //               vertical: 'top',
  //               horizontal: 'left',
  //             }}
  //             open={Boolean(anchorElNav)}
  //             onClose={handleCloseNavMenu}
  //             sx={{
  //               display: { xs: 'block', md: 'none' },
  //             }}
  //           >
  //             {pages.map((page) => (
  //               <MenuItem key={page} onClick={handleCloseNavMenu}>
  //                 <Typography textAlign="center">{page}</Typography>
  //               </MenuItem>
  //             ))}
  //           </Menu>
  //         </Box>
  //         <Typography
  //           variant="h6"
  //           noWrap
  //           component="div"
  //           sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
  //         >
  //           LOGO
  //         </Typography>
  //         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
  //           {pages.map((page) => (
  //             <Button
  //               key={page}
  //               onClick={handleCloseNavMenu}
  //               sx={{ my: 2, color: 'white', display: 'block' }}
  //             >
  //               {page}
  //             </Button>
  //           ))}
  //         </Box>

          
  //       </Toolbar>
  //     </Container>
  //   </AppBar>
  // );



  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <AppBar position='fixed'>
      <Container>
        <Box>
          Home
        </Box>
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="Page One" href="/drafts" />
            <LinkTab label="Page Two" href="/trash" />
            <LinkTab label="Page Three" href="/spam" />
          </Tabs>
        </Box>
      </Container>
    </AppBar>

  )

}

export default Navbar