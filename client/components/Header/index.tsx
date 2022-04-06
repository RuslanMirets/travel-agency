import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <AppBar classes={{ root: styles.root }}>
      <Container>
        <Toolbar disableGutters>
          <Typography className={styles.logo} variant="h5" component="div">
            <Link href="/">
              <a>LOGO</a>
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
