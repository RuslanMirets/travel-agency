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
import { AdminCreateModal } from './AdminCreateModal';
import { TableRowAdmin } from '../TableRowAdmin';

export const AdminComplex: React.FC = () => {
  const { complexes } = useAppSelector((state) => state.complex);

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const handleToggleCreateModal = () => {
    setOpenCreateModal(!openCreateModal);
  };

  return (
    <>
      <Box className={styles.root}>
        <Box className={styles.head}>
          <Typography variant="h6">Список строений</Typography>
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
    </>
  );
};
