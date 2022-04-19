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
import { IComplex } from '../../../types/complex';
import styles from './AdminDeleteModal.module.scss';
import { deleteComplex } from '../../../store/actions/complex';
import { useAppDispatch } from '../../../store/hooks';
import { useForm, FormProvider } from 'react-hook-form';

interface IProps {
  open: boolean;
  onClose: () => void;
  complex: IComplex;
}

export const AdminDeleteModal: React.FC<IProps> = ({ open, onClose, complex }) => {
  const dispatch = useAppDispatch();

  const methods = useForm();

  const onSubmit = () => {
    dispatch(deleteComplex(complex.id));
    onClose();
  };

  return (
    <Dialog className={styles.root} open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        Название «{complex.name}»
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
            <Typography>Вы действительно хотите удалить это строение?</Typography>
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
