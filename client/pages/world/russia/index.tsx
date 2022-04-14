import { NextPage } from 'next';
import React from 'react';
import { Title } from '../../../components/Title';
import MainLayout from '../../../layouts/MainLayout';

const Russia: NextPage = () => {
  return (
    <MainLayout title="Туры по России">
      <Title>Отдых и экскурсии по городам России</Title>
    </MainLayout>
  );
};

export default Russia;
