import { Paper, Typography, Button } from '@mui/material';
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { createCountry } from '../../store/actions/country';
import { useAppDispatch } from '../../store/hooks';
import { FormField } from '../FormField';

export const CountryForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {
    dispatch(createCountry(data));
    methods.reset();
  };

  return (
    <Paper>
      <Typography variant="h5" component="h5">
        Добавить страну
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField type="text" label="Название страны" name="name" />
          <Button type="submit" variant="contained" disabled={methods.formState.isSubmitting}>
            Добавить
          </Button>
        </form>
      </FormProvider>
    </Paper>
  );
};
