import { Box, Paper, Typography } from '@mui/material';
import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { Title } from '../../components/Title';
import { TypeDetail } from '../../components/TypeDetail';
import MainLayout from '../../layouts/MainLayout';
import { wrapper } from '../../store';
import { getTypeDetail } from '../../store/actions/type';
import { useAppSelector } from '../../store/hooks';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const TypeTour: NextPage = () => {
  const { type } = useAppSelector((state) => state.type);

  return (
    <MainLayout title={type?.name}>
      <TypeDetail type={type!} />
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { slug } = context.params as IParams;
  await store.dispatch(getTypeDetail(slug));
  return { props: {} };
});

export default TypeTour;
