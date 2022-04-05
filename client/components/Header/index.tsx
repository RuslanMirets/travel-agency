import React from 'react';
import styles from './Header.module.scss';
import { Button, Container } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logout } from '../../store/actions/user';

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
            <a className={styles.logo}>LOGO</a>
          </Link>
          <nav className={styles.menu}>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <Button>Главная</Button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/users">
                  <a>
                    <Button>Пользователи</Button>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          <ul className={styles.actions}>
            {user ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>
                      <Button>Профиль | {user.name}</Button>
                    </a>
                  </Link>
                </li>
                <li>
                  <Button onClick={handleLogout}>Выйти</Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">
                    <a>
                      <Button>Войти</Button>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    <a>
                      <Button>Зарегистрироваться</Button>
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </header>
  );
};
