import React from 'react';
import { ErrorPage } from '../components/ErrorPage';

const NotFound = () => {
  return <ErrorPage title="404" message="404 | Страница не найдена" />;
};

export default NotFound;
