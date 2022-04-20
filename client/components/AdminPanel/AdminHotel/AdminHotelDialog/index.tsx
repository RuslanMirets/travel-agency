import { Dialog, DialogTitle, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './AdminHotelDialog.module.scss';
import { CreateForm } from './forms/create';
import { UpdateForm } from './forms/update';
import { DeleteForm } from './forms/delete';
import { DeleteAllForm } from './forms/deleteAll';
import { IHotel } from '../../../../types/hotel';

interface IProps {
  open: boolean;
  onClose: () => void;
  formType: any;
  hotel?: IHotel;
}

export const AdminHotelDialog: React.FC<IProps> = ({ open, onClose, formType, hotel }) => {
  return (
    <Dialog className={styles.root} open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {formType === 'create' && 'Добавление'}
        {formType === 'update' && 'Редактирование'}
        {formType === 'delete' && `Удаление «${hotel?.name}»`}
        {formType === 'deleteAll' && 'Удаление'}
        <IconButton className={styles.btnClose} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {formType === 'create' && <CreateForm onClose={onClose} />}
      {formType === 'update' && <UpdateForm onClose={onClose} hotel={hotel!} />}
      {formType === 'delete' && <DeleteForm onClose={onClose} hotel={hotel!} />}
      {formType === 'deleteAll' && <DeleteAllForm onClose={onClose} />}
    </Dialog>
  );
};
