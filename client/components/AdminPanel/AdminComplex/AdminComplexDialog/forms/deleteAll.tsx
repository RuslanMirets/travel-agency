import { DialogContent, DialogActions, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { deleteAllComplexes } from '../../../../../store/actions/complex';
import { useAppDispatch } from '../../../../../store/hooks';
import styles from '../AdminComplexDialog.module.scss';

interface IProps {
  onClose: () => void;
}

export const DeleteAllForm: React.FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const methods = useForm();

  const onSubmit = () => {
    dispatch(deleteAllComplexes());
    onClose();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DialogContent className={styles.content} dividers>
          <Typography>Вы действительно хотите удалить все строения?</Typography>
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
