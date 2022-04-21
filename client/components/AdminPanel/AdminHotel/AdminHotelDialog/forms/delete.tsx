import { DialogContent, DialogActions, Button, Typography } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { deleteHotel } from '../../../../../store/actions/hotel';
import { useAppDispatch } from '../../../../../store/hooks';
import { IHotel } from '../../../../../types/hotel';
import styles from '../AdminHotelDialog.module.scss';

interface IProps {
  onClose: () => void;
  hotel: IHotel;
}

export const DeleteForm: React.FC<IProps> = ({ onClose, hotel }) => {
  const dispatch = useAppDispatch();

  const methods = useForm();

  const onSubmit = () => {
    dispatch(deleteHotel(hotel.id));
    onClose();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogContent className={styles.content} dividers>
            <Typography>Вы действительно хотите удалить этот отель?</Typography>
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
    </>
  );
};
