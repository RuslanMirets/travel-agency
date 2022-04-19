import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './AdminComplex.module.scss';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdminComplexDialog } from './AdminComplexDialog';
import { AdminComplexResult } from './AdminComplexResult';

export const AdminComplex: React.FC = () => {
  const { complexes } = useAppSelector((state) => state.complex);

  const [formType, setFormType] = React.useState<'create' | 'deleteAll'>();

  const [openDialog, setOpenDialog] = useState(false);
  const handleToggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const openCreateDialog = () => {
    handleToggleDialog(), setFormType('create');
  };
  const openDeleteAllDialog = () => {
    handleToggleDialog(), setFormType('deleteAll');
  };

  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
            onClick={openDeleteAllDialog}>
            Удалить всё
          </Button>
          <Button
            variant="outlined"
            color="success"
            startIcon={<AddIcon />}
            onClick={openCreateDialog}>
            Добавить
          </Button>
        </Box>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Дата создания</TableCell>
              <TableCell>Дата обновления</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? complexes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : complexes
            ).map((complex) => (
              <AdminComplexResult key={complex.id} complex={complex} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={complexes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <AdminComplexDialog open={openDialog} onClose={handleToggleDialog} formType={formType} />
    </>
  );
};
