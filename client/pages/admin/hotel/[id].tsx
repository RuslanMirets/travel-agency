import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Title } from '../../../components/Title';
import MainLayout from '../../../layouts/MainLayout';
import { wrapper } from '../../../store';
import { getHotelById } from '../../../store/actions/hotel';
import { useAppSelector } from '../../../store/hooks';

interface IParams extends ParsedUrlQuery {
  id: string;
}

const AdminHotel: NextPage = () => {
  const { hotel } = useAppSelector((state) => state.hotel);

  return (
    <MainLayout title="Редактирование">
      <Title>Редактирование {hotel?.name}</Title>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { id } = context.params as IParams;
  await store.dispatch(getHotelById(id));
  return { props: {} };
});

export default AdminHotel;
