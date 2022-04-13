import {
  Paper,
  Typography,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { createCity } from '../../store/actions/city';
import { useAppDispatch } from '../../store/hooks';
import { ICountry } from '../../types/country';
import { FormField } from '../FormField';

interface IProps {
  countries: ICountry[];
}

export const CityForm: React.FC<IProps> = ({ countries }) => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {
    dispatch(createCity(data));
    methods.reset();
  };

  return (
    <Paper>
      <Typography variant="h5" component="h5">
        Добавить город
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Страна</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Страна"
              {...methods.register('countryId')}>
              {countries.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormField type="text" label="Название города" name="name" />
          <Button type="submit" variant="contained" disabled={methods.formState.isSubmitting}>
            Добавить
          </Button>
        </form>
      </FormProvider>
    </Paper>
  );
};
