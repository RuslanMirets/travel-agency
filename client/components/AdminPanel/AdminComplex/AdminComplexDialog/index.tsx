import { Dialog, DialogTitle, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './AdminComplexDialog.module.scss';
import { CreateForm } from './forms/create';
import { DeleteAllForm } from './forms/deleteAll';
import { IComplex } from '../../../../types/complex';
import { UpdateForm } from './forms/update';
import { DeleteForm } from './forms/delete';

interface IProps {
  open: boolean;
  onClose: () => void;
  formType: any;
  complex?: IComplex;
}

export const AdminComplexDialog: React.FC<IProps> = ({ open, onClose, formType, complex }) => {
  return (
    <Dialog className={styles.root} open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        {formType === 'create' && 'Добавление'}
        {formType === 'update' && 'Редактирование'}
        {formType === 'delete' && `Удаление «${complex?.name}»`}
        {formType === 'deleteAll' && 'Удаление'}
        <IconButton className={styles.btnClose} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      {formType === 'create' && <CreateForm onClose={onClose} />}
      {formType === 'update' && <UpdateForm onClose={onClose} complex={complex!} />}
      {formType === 'delete' && <DeleteForm onClose={onClose} complex={complex!} />}
      {formType === 'deleteAll' && <DeleteAllForm onClose={onClose} />}
    </Dialog>
  );
};
