import { TextField } from '@mui/material';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IProps {
  name: string;
  label: string;
}

export const FormSelect: React.FC<IProps> = ({ children, name, label }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      size="small"
      select
      fullWidth
      defaultValue=""
      label={label}
      inputProps={register(name)}
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}>
      {children}
    </TextField>
  );
};
