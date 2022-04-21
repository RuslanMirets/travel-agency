import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { IHotel } from '../../../types/hotel';
import { AdminHotelDialog } from './AdminHotelDialog';
import { hotelImage } from '../../../utils/constants';
import styles from './AdminHotel.module.scss';
import { LinkItem } from '../../LinkItem';

interface IProps {
  hotel: IHotel;
}

export const TableContent: React.FC<IProps> = ({ hotel }) => {
  const [formType, setFormType] = React.useState<'update' | 'delete'>();

  const [openDialog, setOpenDialog] = useState(false);
  const handleToggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const openUpdateDialog = () => {
    handleToggleDialog(), setFormType('update');
  };
  const openDeleteDialog = () => {
    handleToggleDialog(), setFormType('delete');
  };

  return (
    <>
      <TableRow>
        <TableCell>{hotel.id}</TableCell>
        <TableCell>{hotel.name}</TableCell>
        <TableCell>{new Date(hotel.createdAt).toLocaleString()}</TableCell>
        <TableCell>{new Date(hotel.updatedAt).toLocaleString()}</TableCell>
        <TableCell className={styles.actionCell} align="right">
          <IconButton color="info" onClick={openUpdateDialog}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={openDeleteDialog}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AdminHotelDialog
        open={openDialog}
        onClose={handleToggleDialog}
        formType={formType}
        hotel={hotel}
      />
    </>
  );
};
