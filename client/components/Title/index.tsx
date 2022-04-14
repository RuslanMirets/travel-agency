import { Typography } from '@mui/material';
import React from 'react';
import styles from './Title.module.scss';

export const Title: React.FC = ({ children }) => {
  return (
    <Typography classes={{ root: styles.root }} variant="h5" component="h5">
      {children}
    </Typography>
  );
};
