import { yupResolver } from '@hookform/resolvers/yup';
import { DialogContent, DialogActions, Button, MenuItem } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { createHotel } from '../../../../../store/actions/hotel';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { HotelFormSchema } from '../../../../../utils/validations';
import { FormField } from '../../../../FormField';
import { FormFile } from '../../../../FormFile';
import { FormSelect } from '../../../../FormSelect';
import styles from '../AdminHotelDialog.module.scss';

interface IProps {
  onClose: () => void;
}

export const CreateForm: React.FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { complexes } = useAppSelector((state) => state.complex);

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(HotelFormSchema),
  });

  const onSubmit = (data: any) => {
    dispatch(createHotel(data));
    methods.reset();
    onClose();
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogContent className={styles.content} dividers>
            <FormSelect name="complexId" label="Строение">
              {complexes.map((complex) => (
                <MenuItem key={complex.id} value={complex.id}>
                  {complex.name}
                </MenuItem>
              ))}
            </FormSelect>
            <FormField type="text" label="Название отеля" name="name" />
            <FormField
              type="text"
              label="Расположение отеля"
              name="location"
              multiline
              maxRows={4}
            />
            <FormFile name="image" />
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
    </>
  );
};
