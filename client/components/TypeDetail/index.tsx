import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import { IType } from '../../types/type';
import { typeImage } from '../../utils/constants';
import { Title } from '../Title';
import styles from './TypeDetail.module.scss';

interface IProps {
  type: IType;
}

export const TypeDetail: React.FC<IProps> = ({ type }) => {
  return (
    <Box className={styles.root}>
      <Title>{type?.name}</Title>
      <Paper className={styles.paper}>
        <Box className={styles.info}>
          <img src={typeImage + type.image} alt={type.name} />
          <Typography>{type.description}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};
