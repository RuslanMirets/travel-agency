import { yupResolver } from '@hookform/resolvers/yup';
import {
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  IconButton,
  Typography,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import React, { ChangeEvent } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { createHotel } from '../../../../../store/actions/hotel';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { HotelFormSchema } from '../../../../../utils/validations';
import { FormField } from '../../../../FormField';
import { FormFile } from '../../../../FormFile';
import { FormSelect } from '../../../../FormSelect';
import styles from '../AdminHotelDialog.module.scss';
import { alertSlice } from '../../../../../store/slices/alert';

interface IProps {
  onClose: () => void;
}

export const CreateForm: React.FC<IProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const { complexes } = useAppSelector((state) => state.complex);

  const initialState = {
    image: '' as any,
  };

  const [data, setData] = React.useState(initialState);
  const { image } = data;

  const changeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setData({ ...data, image: file });
  };

  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(HotelFormSchema),
  });

  const onSubmit = (data: any) => {
    if (image === '') {
      dispatch(alertSlice.actions.errors('Загрузите изображение'));
    } else {
      dispatch(createHotel(data));
      methods.reset();
      onClose();
    }
  };

  return (
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
          <FormField type="text" label="Расположение отеля" name="location" multiline maxRows={4} />
          <div className={styles.upload}>
            <Typography className={styles.uploadTitle} variant="subtitle1">
              Изображение:
            </Typography>
            <div className={styles.image}>
              <img
                src={image ? URL.createObjectURL(image) : '/assets/images/default-image.jpg'}
                alt="Image"
              />
              <IconButton>
                <PhotoCameraIcon />
                <FormFile name="image" onChange={changeImage} />
              </IconButton>
            </div>
          </div>
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
