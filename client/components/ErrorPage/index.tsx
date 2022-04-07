import { Box, Typography } from '@mui/material';
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import styles from './ErrorPage.module.scss';

interface IProps {
  title: string;
  message: string;
}

export const ErrorPage: React.FC<IProps> = ({ title, message }) => {
  return (
    <MainLayout title={title}>
      <Box className={styles.root}>
        <Typography variant="h5" component="h5">
          {message}
        </Typography>
      </Box>
    </MainLayout>
  );
};
