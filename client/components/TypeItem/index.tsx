import { Card, Box, Typography } from '@mui/material';
import React from 'react';
import { IType } from '../../types/type';
import { typeImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './TypeItem.module.scss';

interface IProps {
  type: IType;
}

export const TypeItem: React.FC<IProps> = ({ type }) => {
  return (
    <Card classes={{ root: styles.root }}>
      <LinkItem href={`/tours/${type.slug}`}>
        <Box className={styles.body}>
          <img src={typeImage + type.image} alt={type.name} />
          <Typography className={styles.title} variant="subtitle1">
            {type.name}
          </Typography>
        </Box>
      </LinkItem>
    </Card>
  );
};
