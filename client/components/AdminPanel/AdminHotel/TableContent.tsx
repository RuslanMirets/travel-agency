import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { IHotel } from '../../../types/hotel';
import { AdminHotelDialog } from './AdminHotelDialog';
import { hotelImage } from '../../../utils/constants';
import styles from './AdminHotel.module.scss';

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
        <TableCell className={styles.actionCell}>
          <IconButton color="info" onClick={openUpdateDialog}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={openDeleteDialog}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">{hotel.id}</TableCell>
        <TableCell align="right">
          <img className={styles.image} src={hotelImage + hotel.image} alt={hotel.name} />
        </TableCell>
        <TableCell align="right">{hotel.name}</TableCell>
        <TableCell align="right">{hotel.location}</TableCell>
        <TableCell align="right">{new Date(hotel.createdAt).toLocaleString()}</TableCell>
        <TableCell align="right">{new Date(hotel.updatedAt).toLocaleString()}</TableCell>
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
