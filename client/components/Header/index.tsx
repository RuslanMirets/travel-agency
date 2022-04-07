import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Link from 'next/link';
import React from 'react';
import { LinkItem } from '../LinkItem';
import { NavItem } from '../NavItem';
import styles from './Header.module.scss';

const pages = [
  { title: 'Главная', href: '/' },
  { title: 'Пользователи', href: '/users' },
];

const actions = [
  { title: 'Войти', href: '/login' },
  { title: 'Зарегистрироваться', href: '/register' },
];

const adminItems = [
  { title: 'Пользователи', href: '/users', icon: <PeopleIcon fontSize="small" /> },
];

export const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAuth = false;
  const isAdmin = true;

  return (
    <AppBar classes={{ root: styles.root }}>
      <Container>
        <Toolbar className={styles.body} disableGutters>
          <Typography className={styles.logo} variant="h5" component="div">
            <LinkItem href="/">LOGO</LinkItem>
          </Typography>
          <Box className={styles.menu}>
            {pages.map((page) => (
              <NavItem key={page.title} title={page.title} href={page.href} />
            ))}
          </Box>
          <Box className={styles.actions}>
            {isAuth ? (
              <>
                <IconButton onClick={handleClick}>
                  <Avatar alt="Avatar" />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  keepMounted>
                  <Link href="/profile">
                    <MenuItem onClick={handleClose} component="a">
                      <ListItemIcon>
                        {isAdmin ? (
                          <AdminPanelSettingsIcon fontSize="small" />
                        ) : (
                          <PersonIcon fontSize="small" />
                        )}
                      </ListItemIcon>
                      <ListItemText>Профиль</ListItemText>
                    </MenuItem>
                  </Link>
                  {isAdmin &&
                    adminItems.map((item) => (
                      <Link key={item.title} href={item.href}>
                        <MenuItem onClick={handleClose} component="a">
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText>{item.title}</ListItemText>
                        </MenuItem>
                      </Link>
                    ))}
                  <Divider variant="middle" />
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Выйти</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              actions.map((page) => (
                <NavItem key={page.title} title={page.title} href={page.href} />
              ))
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
