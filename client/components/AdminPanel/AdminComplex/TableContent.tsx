import { TableRow, TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { AdminComplexDialog } from './AdminComplexDialog';
import { IComplex } from '../../../types/complex';
import styles from './AdminComplex.module.scss';

interface IProps {
  complex: IComplex;
}

export const TableContent: React.FC<IProps> = ({ complex }) => {
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
        <TableCell>{complex.id}</TableCell>
        <TableCell>{complex.name}</TableCell>
        <TableCell>{new Date(complex.createdAt).toLocaleString()}</TableCell>
        <TableCell>{new Date(complex.updatedAt).toLocaleString()}</TableCell>
        <TableCell className={styles.actionCell} align="right">
          <IconButton color="info" onClick={openUpdateDialog}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={openDeleteDialog}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <AdminComplexDialog
        open={openDialog}
        onClose={handleToggleDialog}
        formType={formType}
        complex={complex}
      />
    </>
  );
};
