import { yupResolver } from '@hookform/resolvers/yup';
import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, FormProvider } from 'react-hook-form';
import { useAppDispatch } from '../../../store/hooks';
import { ComplexFormSchema } from '../../../utils/validations';
import { FormField } from '../../FormField';
import styles from './AdminUpdateModal.module.scss';
import { IComplex } from '../../../types/complex';
import { updateComplex } from '../../../store/actions/complex';

interface IProps {
  open: boolean;
  onClose: () => void;
  complex: IComplex;
}

export const AdminUpdateModal: React.FC<IProps> = ({ open, onClose, complex }) => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(ComplexFormSchema),
    defaultValues: {
      name: complex.name,
    },
  });

  const onSubmit = (data: any) => {
    dispatch(updateComplex(data, complex.id));
    onClose();
  };

  return (
    <Dialog className={styles.root} open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        Новое название строения
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
            <FormField type="text" label="Новое название строения" name="name" />
          </DialogContent>
          <DialogActions sx={{ padding: '15px 8px' }}>
            <Button variant="outlined" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" variant="contained" color="success">
              Обновить
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};
