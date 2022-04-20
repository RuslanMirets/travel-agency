import { TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';
import React from 'react';

interface IProps {
  order: any;
  orderBy: any;
  handleRequestSort: any;
}

interface IHeadCell {
  id: string;
  label: string;
}

const headCells: IHeadCell[] = [
  { id: 'id', label: 'ID' },
  { id: 'image', label: 'Изображение' },
  { id: 'name', label: 'Название' },
  { id: 'complex', label: 'Строение' },
  { id: 'location', label: 'Расположение' },
  { id: 'createdAt', label: 'Дата создания' },
  { id: 'updatedAt', label: 'Дата обновления' },
];

export const TableHeader: React.FC<IProps> = ({ order, orderBy, handleRequestSort }) => {
  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>Actions</TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} sx={{ whiteSpace: 'nowrap' }} align="right">
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'desc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
