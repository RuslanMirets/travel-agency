import {
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<IProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ textTransform: 'capitalize' }}>
        Добавить страну
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>Вы действительно хотите удалить этот товар?</DialogContent>
      <DialogActions sx={{ padding: '15px 8px' }}>
        <Button variant="outlined" onClick={onClose}>
          Отмена
        </Button>
        <Button variant="contained" color="success">
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
};
