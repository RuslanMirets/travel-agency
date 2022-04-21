import { DialogContent, DialogActions, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { deleteComplex } from '../../../../../store/actions/complex';
import { useAppDispatch } from '../../../../../store/hooks';
import { IComplex } from '../../../../../types/complex';
import styles from '../AdminComplexDialog.module.scss';

interface IProps {
  onClose: () => void;
  complex: IComplex;
}

export const DeleteForm: React.FC<IProps> = ({ onClose, complex }) => {
  const dispatch = useAppDispatch();

  const methods = useForm();

  const onSubmit = () => {
    dispatch(deleteComplex(complex.id));
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DialogContent className={styles.content} dividers>
          <Typography>Вы действительно хотите удалить это строение?</Typography>
        </DialogContent>
        <DialogActions className={styles.actions}>
          <Button variant="outlined" onClick={onClose}>
            Отмена
          </Button>
          <Button type="submit" variant="contained" color="error">
            Удалить
          </Button>
        </DialogActions>
      </form>
    </FormProvider>
  );
};
