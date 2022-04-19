import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { AdminUpdateModal } from './AdminComplex/AdminUpdateModal';
import { IComplex } from '../types/complex';

interface IProps {
  complex: IComplex;
}

export const TableRowAdmin: React.FC<IProps> = ({ complex }) => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const handleToggleUpdateModal = () => {
    setOpenUpdateModal(!openUpdateModal);
  };

  return (
    <>
      <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell>{complex.id}</TableCell>
        <TableCell>{complex.name}</TableCell>
        <TableCell align="right">
          <IconButton color="info" onClick={handleToggleUpdateModal}>
            <EditIcon />
          </IconButton>
          <IconButton color="error">
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AdminUpdateModal
        open={openUpdateModal}
        onClose={handleToggleUpdateModal}
        complex={complex}
      />
    </>
  );
};
