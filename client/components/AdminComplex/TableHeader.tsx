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
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'name',
    label: 'Название',
  },
  {
    id: 'createdAt',
    label: 'Дата создания',
  },
  {
    id: 'updatedAt',
    label: 'Дата обновления',
  },
];

export const TableHeader: React.FC<IProps> = ({ order, orderBy, handleRequestSort }) => {
  const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'desc'}
              onClick={createSortHandler(headCell.id)}>
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
