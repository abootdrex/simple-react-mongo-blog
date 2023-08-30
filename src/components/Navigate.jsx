import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Send as SendIcon } from '@mui/icons-material';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import Blog from './Blog';
import logo from '../media/durgesh.jpg'


const styles = {
  AppBar: {
    background: '#1a3a63',
    color: 'white',
    textDecoration: 'none',  
    overflowY:'hidden'
  },
  Button: {
    color: 'white',  
    display: 'block',

  },
};


function Navigate() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (<>
   <Router>
    <AppBar position="fixed" style={styles.AppBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SettingsEthernetIcon sx={{ display: { xs: 'none', md: 'flex', }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1 rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TechBlog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}>
              <MenuItem onClick={handleCloseNavMenu} style={styles.Button}>
                <Button style={styles.Button}
                > <Link to="/" style={{textDecoration:'none'}}>Blog</Link>
                </Button>
                <Button
                style={styles.Button}
                ><Link to="/Form" style={{textDecoration:'none',color:'white'}}>Post Blog<br/>
                  <SendIcon/>
                </Link>        
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <SettingsEthernetIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
      TechBlog
          </Typography>
&nbsp; &nbsp;
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              style={styles.Button}
              onClick={handleCloseNavMenu}>
              <Typography>
              <Link to="/" style={{textDecoration:'none',color:'white'}}>Blog</Link></Typography>
            </Button>&nbsp;
            <Button
              style={styles.Button}
              onClick={handleCloseNavMenu}>
              <Typography>
              <Link to="/Form" style={{textDecoration:'none',color:'white'}}>Post Blog</Link></Typography>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="D" src={logo} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Durgesh Malviya</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>    
      <Routes>

        <Route exact path='/' element={<Blog/>}></Route>
        <Route exact path='/Form' element={<Form />}></Route>

      </Routes>
    </Router>
  </>);
}
export default Navigate;
