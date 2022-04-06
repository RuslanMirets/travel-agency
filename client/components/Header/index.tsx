import React from 'react';
import styles from './Header.module.scss';
import {
  Avatar,
  Box,
  Container,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/actions/user';
import { NavItem } from '../NavItem';
import { AdminPanelSettings, Edit, Group, Logout, Person } from '@mui/icons-material';

const adminItems = [
  {
    title: 'Пользователи',
    href: '/users',
    icon: <Group fontSize="small" />,
  },
  {
    title: 'Редактировать',
    href: '/edit',
    icon: <Edit fontSize="small" />,
  },
];

export const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.body}>
          <Link href="/">
            <a className={styles.logo}>
              <Typography variant="h5">LOGO</Typography>
            </a>
          </Link>
          <Box className={styles.menu} component="nav">
            <Box component="ul">
              <NavItem title="Главная" href="/" />
              <NavItem title="Пользователи" href="/users" />
            </Box>
          </Box>
          <Box className={styles.actions} component="ul">
            {user ? (
              <Box className={styles.user}>
                <IconButton onClick={handleClick}>
                  <Avatar alt={user.name} />
                </IconButton>
                <Menu
                  sx={{ mt: '40px' }}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}>
                  <Link href="/profile">
                    <MenuItem component="a">
                      <ListItemIcon>
                        {user.role[0].value === 'ADMIN' ? (
                          <AdminPanelSettings fontSize="small" />
                        ) : (
                          <ListItemIcon>
                            <Person fontSize="small" />
                          </ListItemIcon>
                        )}
                      </ListItemIcon>
                      Профиль
                    </MenuItem>
                  </Link>
                  {user.role[0].value === 'ADMIN' &&
                    adminItems.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <MenuItem component="a">
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          {item.title}
                        </MenuItem>
                      </Link>
                    ))}
                  <Divider variant="middle" />
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Выйти
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <>
                <NavItem title="Войти" href="/login" />
                <NavItem title="Зарегистрироваться" href="/register" />
              </>
            )}
          </Box>
        </div>
      </Container>
    </header>
  );
};
