import { yupResolver } from '@hookform/resolvers/yup';
import { DialogContent, DialogActions, Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../../store/hooks';
import { IHotel } from '../../../../../types/hotel';
import { HotelFormSchema } from '../../../../../utils/validations';
import { FormField } from '../../../../FormField';
import styles from '../AdminHotelDialog.module.scss';

interface IProps {
  onClose: () => void;
  hotel: IHotel;
}

export const UpdateForm: React.FC<IProps> = ({ onClose, hotel }) => {
  const dispatch = useAppDispatch();

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(HotelFormSchema),
    defaultValues: {
      name: hotel.name,
    },
  });

  const onSubmit = (data: any) => {
    // dispatch(updatehotel(data, hotel.id));
    // onClose();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogContent className={styles.content} dividers>
            <FormField type="text" label="Новое название строения" name="name" />
          </DialogContent>
          <DialogActions className={styles.actions}>
            <Button variant="outlined" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" variant="contained" color="info">
              Обновить
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </>
  );
};
