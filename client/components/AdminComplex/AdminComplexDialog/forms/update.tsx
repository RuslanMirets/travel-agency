import { yupResolver } from '@hookform/resolvers/yup';
import { DialogContent, DialogActions, Button } from '@mui/material';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { updateComplex } from '../../../../store/actions/complex';
import { useAppDispatch } from '../../../../store/hooks';
import { IComplex } from '../../../../types/complex';
import { ComplexFormSchema } from '../../../../utils/validations';
import { FormField } from '../../../FormField';
import styles from '../AdminComplexDialog.module.scss';

interface IProps {
  onClose: () => void;
  complex: IComplex;
}

export const UpdateForm: React.FC<IProps> = ({ onClose, complex }) => {
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
