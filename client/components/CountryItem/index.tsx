import { Card, Box, Typography } from '@mui/material';
import React from 'react';
import { ICountry } from '../../types/country';
import { countryImage } from '../../utils/constants';
import { LinkItem } from '../LinkItem';
import styles from './CountryItem.module.scss';

interface IProps {
  country: ICountry;
}

export const CountryItem: React.FC<IProps> = ({ country }) => {
  return (
    <Card classes={{ root: styles.root }}>
      <LinkItem href={`/world/abroad/${country.slug}`}>
        <Box className={styles.body}>
          <img src={countryImage + country.image} alt={country.name} />
          <Typography className={styles.title} variant="subtitle1">
            {country.name}
          </Typography>
        </Box>
      </LinkItem>
    </Card>
  );
};
