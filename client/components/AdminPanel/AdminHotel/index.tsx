import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TablePagination,
  TableContainer,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import styles from './AdminHotel.module.scss';
import { TableContent } from './TableContent';
import { TableHeader } from './TableHeader';
import { AdminHotelDialog } from './AdminHotelDialog';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const AdminHotel: React.FC = () => {
  const { hotels } = useAppSelector((state) => state.hotel);

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

  const [order, setOrder] = React.useState<Order>('desc');
  const [orderBy, setOrderBy] = useState('id');
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: any) => {
    const isAsc = orderBy === property && order === 'desc';
    setOrder(isAsc ? 'asc' : 'desc');
    setOrderBy(property);
  };

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
            Список отелей
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
        <TableContainer>
          <Table size="small">
            <TableHeader order={order} orderBy={orderBy} handleRequestSort={handleRequestSort} />
            <TableBody>
              {stableSort(hotels, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((hotel) => (
                  //@ts-ignore
                  <TableContent key={hotel.id} hotel={hotel} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={hotels.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <AdminHotelDialog open={openDialog} onClose={handleToggleDialog} formType={formType} />
    </>
  );
};
