import { Box, Paper, Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { LinkItem } from '../../../components/LinkItem';
import { Title } from '../../../components/Title';
import MainLayout from '../../../layouts/MainLayout';

const Russia: NextPage = () => {
  return (
    <MainLayout title="Туры по России">
      <Title>Отдых и экскурсии по городам России</Title>
      <Paper sx={{ padding: '20px' }}>
        <Box>
          <LinkItem href="/world/russia/sochi">
            <Typography>Сочи</Typography>
          </LinkItem>
        </Box>
      </Paper>
    </MainLayout>
  );
};

export default Russia;
