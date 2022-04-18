import {
  Box,
  Button,
  IconButton,
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { AdminCreateModal } from './AdminCreateModal';

export const AdminComplex: React.FC = () => {
  const { complexes } = useAppSelector((state) => state.complex);

  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
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
            onClick={handleToggleModal}>
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
              <TableRow key={complex.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{complex.id}</TableCell>
                <TableCell>{complex.name}</TableCell>
                <TableCell align="right">
                  <IconButton color="info">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <AdminCreateModal open={openModal} onClose={handleToggleModal} />
    </>
  );
};
