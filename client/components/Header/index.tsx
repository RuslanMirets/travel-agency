import React from 'react';
import styles from './Header.module.scss';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/actions/user';
import { NavItem } from '../NavItem';

export const Header: React.FC = () => {
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
              <NavItem title="Выйти" href="#" onClick={handleLogout} />
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
