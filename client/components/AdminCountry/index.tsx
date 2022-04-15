import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './AdminCountry.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { AdminModal } from './AdminModal';

export const AdminCountry: React.FC = () => {
  const { countries } = useAppSelector((state) => state.country);

  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Box className={styles.root}>
      <Box className={styles.head}>
        <Typography variant="h6">Список стран</Typography>
        <Button
          className={styles.addBtn}
          variant="outlined"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleToggleModal}>
          Добавить
        </Button>
      </Box>

      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Название</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries.map((country) => (
            <TableRow key={country.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{country.id}</TableCell>
              <TableCell>{country.name}</TableCell>
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
      <AdminModal open={openModal} onClose={handleToggleModal} />
    </Box>
  );
};
