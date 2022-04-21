import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import {
  DialogContent,
  DialogActions,
  Button,
  MenuItem,
  IconButton,
  Typography,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { IHotel } from '../../../../../types/hotel';
import { HotelFormSchema } from '../../../../../utils/validations';
import { FormField } from '../../../../FormField';
import { FormSelect } from '../../../../FormSelect';
import { ChangeEvent } from 'react';
import React from 'react';
import styles from '../AdminHotelDialog.module.scss';
import { FormFile } from '../../../../FormFile';
import { hotelImage } from '../../../../../utils/constants';
// import { updateHotel } from '../../../../../store/actions/hotel';
import { alertSlice } from '../../../../../store/slices/alert';
import {
  updateHotelComplex,
  updateHotelImage,
  updateHotelLocation,
  updateHotelName,
} from '../../../../../store/actions/hotel';

interface IProps {
  onClose: () => void;
  hotel: IHotel;
}

export const UpdateForm: React.FC<IProps> = ({ onClose, hotel }) => {
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
    defaultValues: {
      name: hotel.name,
      location: hotel.location,
      complexId: hotel.complexId,
    },
  });

  // const { name, location, complexId } = methods.getValues();

  // const onSubmit = (data: any) => {
  //   if (
  //     name === hotel.name &&
  //     location === hotel.location &&
  //     complexId === hotel.complexId &&
  //     hotel.image !== ''
  //   ) {
  //     dispatch(alertSlice.actions.errors('Нечего менять'));
  //   } else if (image === '') {
  //     dispatch(alertSlice.actions.errors('Загрузите изображение'));
  //   } else {
  //     dispatch(updateHotel(data, hotel.id));
  //     onClose();
  //   }
  // };
  const onSubmit = ({ name, location, complexId }: any) => {
    if (name !== hotel.name) {
      dispatch(updateHotelName({ name }, hotel.id));
      onClose();
    }
    if (location !== hotel.location) {
      dispatch(updateHotelLocation({ location }, hotel.id));
      onClose();
    }
    if (complexId !== hotel.complexId) {
      dispatch(updateHotelComplex({ complexId }, hotel.id));
      onClose();
    }
    if (image !== hotel.image) {
      dispatch(updateHotelImage(image, hotel.id));
      onClose();
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <DialogContent className={styles.content} dividers>
          <FormSelect name="complexId" label="Строение" defaultValue={hotel.complexId}>
            {complexes.map((complex) => (
              <MenuItem key={complex.id} value={complex.id}>
                {complex.name}
              </MenuItem>
            ))}
          </FormSelect>
          <FormField type="text" label="Название" name="name" />
          <FormField type="text" label="Расположение" name="location" />
          <div className={styles.upload}>
            <Typography className={styles.uploadTitle} variant="subtitle1">
              Изображение:
            </Typography>
            <div className={styles.image}>
              <img
                src={image ? URL.createObjectURL(image) : hotelImage + hotel.image}
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
          <Button type="submit" variant="contained" color="info">
            Обновить
          </Button>
        </DialogActions>
      </form>
    </FormProvider>
  );
};
