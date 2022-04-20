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
        <TableCell className={styles.actionCell}>
          <IconButton color="info" onClick={openUpdateDialog}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={openDeleteDialog}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">{complex.id}</TableCell>
        <TableCell align="right">{complex.name}</TableCell>
        <TableCell align="right">{new Date(complex.createdAt).toLocaleString()}</TableCell>
        <TableCell align="right">{new Date(complex.updatedAt).toLocaleString()}</TableCell>
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
