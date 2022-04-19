import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styles from './AdminDeleteAllModal.module.scss';
import { deleteAllComplexes } from '../../../store/actions/complex';
import { useAppDispatch } from '../../../store/hooks';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const AdminDeleteAllModal: React.FC<IProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();

  const methods = useForm();

  const onSubmit = () => {
    dispatch(deleteAllComplexes());
    onClose();
  };

  return (
    <Dialog className={styles.root} open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        Удаление
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogContent classes={{ root: styles.dialogContent }} dividers>
            <Typography>Вы действительно хотите удалить все строения?</Typography>
          </DialogContent>
          <DialogActions sx={{ padding: '15px 8px' }}>
            <Button variant="outlined" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" variant="contained" color="error">
              Удалить
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};
