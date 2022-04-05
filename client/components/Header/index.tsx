import React from 'react';
import styles from './Header.module.scss';
import { Button, Container } from '@mui/material';
import Link from 'next/link';

export const Header: React.FC = () => {
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
            </ul>
          </nav>
          <ul className={styles.actions}>
            <li>
              <Link href="/login">
                <a>
                  <Button>Войти</Button>
                </a>
              </Link>
              <Link href="/register">
                <a>
                  <Button>Зарегистрироваться</Button>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};
