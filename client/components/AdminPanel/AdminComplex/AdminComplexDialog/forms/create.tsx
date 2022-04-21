import { yupResolver } from '@hookform/resolvers/yup';
import { DialogContent, DialogActions, Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { createComplex } from '../../../../../store/actions/complex';
import { useAppDispatch } from '../../../../../store/hooks';
import { ComplexFormSchema } from '../../../../../utils/validations';
import { FormField } from '../../../../FormField';
import styles from '../AdminComplexDialog.module.scss';

interface IProps {
  onClose: () => void;
}

export const CreateForm: React.FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(ComplexFormSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(createComplex(data));
    methods.reset();
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DialogContent className={styles.content} dividers>
          <FormField type="text" label="Название строения" name="name" />
        </DialogContent>
        <DialogActions className={styles.actions}>
          <Button variant="outlined" onClick={onClose}>
            Отмена
          </Button>
          <Button type="submit" variant="contained" color="success">
            Добавить
          </Button>
        </DialogActions>
      </form>
    </FormProvider>
  );
};
