import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Paper, AppBar, Toolbar, IconButton, InputBase, MenuItem, Menu, Badge } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withRouter } from 'react-router-dom';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

import { getCartSlice } from '../Store/CartSlice'
import { withStyles } from '@material-ui/core/styles';
import { UserSlice } from '../Store/UserSlice';

import Typography from '@material-ui/core/Typography';




const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const userStore = UserSlice();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [cartCoursesNumber, setCartCoursesNumber] = useState(0)
  useEffect(() => {
    setCartCoursesNumber(
      getCartSlice().length
    )
  }, [getCartSlice().length])

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={() => handleMenuClick(null)}
    >
      <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >


      <MenuItem onClick={() => handleMenuClick('/cursos')}>
        <IconButton color="inherit">
          <ImportContactsIcon />
        </IconButton>
        <p>Cursos</p>
      </MenuItem>

      <MenuItem onClick={() => handleMenuClick('/carrinho')}>
        <IconButton color="inherit">
          <StyledBadge badgeContent={cartCoursesNumber} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <p>Carrinho</p>
      </MenuItem>

      <MenuItem onClick={() => handleMenuClick('/login')}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Login</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>

          <Paper variant="outlined" onClick={() => handleMenuClick('/')}>
            <img width="200" src="https://i.imgur.com/h05fD1i.png" alt="Logo Salva o Semestre" />
          </Paper>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Pesquisar.."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>


          <div className={classes.grow} />
          <Typography color="White" variant="body1">
            {userStore.getLogin()}
          </Typography>

          <div className={classes.sectionDesktop}>

            <IconButton onClick={() => handleMenuClick('/cursos')} aria-label="show 4 new mails" color="inherit">
              <ImportContactsIcon />
            </IconButton>

            <IconButton onClick={() => handleMenuClick('/carrinho')} aria-label="show 4 new mails" color="inherit">
              <StyledBadge badgeContent={cartCoursesNumber} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => handleMenuClick('/login')}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}


export default withRouter(Header);