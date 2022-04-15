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
import { FormProvider, useForm } from 'react-hook-form';
import styles from './AdminCreateModal.module.scss';
import { useAppDispatch } from '../../../store/hooks';
import { createCountry } from '../../../store/actions/country';
import { FormField } from '../../FormField';
import { UploadFile } from '../../UploadFile';
import { uploadCountryImage } from '../../../utils/uploadImage';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const AdminCreateModal: React.FC<IProps> = ({ open, onClose }) => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: any) => {
    // let result = [];
    // const test = methods.getValues('image');
    // result.push({ filename: filename });

    const file = data.image[0];
    dispatch(createCountry({ ...data, image: file }));
  };

  return (
    <Dialog className={styles.root} open={open} onClose={onClose} fullWidth>
      <DialogTitle sx={{ textTransform: 'capitalize' }}>
        Добавление страны
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
            <FormField type="text" label="Название страны" name="name" />
            <FormField
              type="text"
              label="Название страны"
              name="description"
              multiline
              maxRows={5}
            />
            <UploadFile name="image" />
          </DialogContent>
          <DialogActions sx={{ padding: '15px 8px' }}>
            <Button variant="outlined" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" variant="contained" color="success">
              Добавить
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  );
};
