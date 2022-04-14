import { NextPage } from 'next';
import React from 'react';
import { Title } from '../../../components/Title';
import MainLayout from '../../../layouts/MainLayout';

const Abroad: NextPage = () => {
  return (
    <MainLayout title="Отдых за границей">
      <Title>Отдых и экскурсии по зарубежным странам</Title>
    </MainLayout>
  );
};

export default Abroad;
