import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './AdminComplex.module.scss';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdminCreateModal } from './AdminCreateModal';
import { TableRowAdmin } from '../TableRowAdmin';
import { AdminDeleteAllModal } from './AdminDeleteAllModal';

export const AdminComplex: React.FC = () => {
  const { complexes } = useAppSelector((state) => state.complex);

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleToggleCreateModal = () => {
    setOpenCreateModal(!openCreateModal);
  };

  const [openDeleteAllModal, setOpenDeleteAllModal] = useState(false);
  const handleToggleDeleteAllModal = () => {
    setOpenDeleteAllModal(!openDeleteAllModal);
  };

  return (
    <>
      <Box className={styles.root}>
        <Box className={styles.head}>
          <Typography variant="h6" component="h6">
            Список строений
          </Typography>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleToggleDeleteAllModal}>
            Удалить всё
          </Button>
          <Button
            variant="outlined"
            color="success"
            startIcon={<AddIcon />}
            onClick={handleToggleCreateModal}>
            Добавить
          </Button>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Название</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complexes.map((complex) => (
              <TableRowAdmin key={complex.id} complex={complex} />
            ))}
          </TableBody>
        </Table>
      </Box>
      <AdminCreateModal open={openCreateModal} onClose={handleToggleCreateModal} />
      <AdminDeleteAllModal open={openDeleteAllModal} onClose={handleToggleDeleteAllModal} />
    </>
  );
};
