import { Card, Box, Typography } from '@mui/material';
import { type } from 'os';
import React from 'react';
import { ICity } from '../../types/city';
import { cityImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './CityItem.module.scss';

interface IProps {
  city: ICity;
}

export const CityItem: React.FC<IProps> = ({ city }) => {
  return (
    <Card classes={{ root: styles.root }}>
      <LinkItem href={`/world/russia/${city.slug}`}>
        <Box className={styles.body}>
          <img src={cityImage + city.image} alt={city.name} />
          <Typography className={styles.title} variant="subtitle1">
            {city.name}
          </Typography>
        </Box>
      </LinkItem>
    </Card>
  );
};
