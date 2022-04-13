import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { CityForm } from '../components/TestComponents/CityForm';
import { CountryForm } from '../components/TestComponents/CountryForm';
import MainLayout from '../layouts/MainLayout';
import { wrapper } from '../store';
import { getCities } from '../store/actions/city';
import { getCountries } from '../store/actions/country';
import { useAppSelector } from '../store/hooks';

const Tests: NextPage = () => {
  const { cities } = useAppSelector((state) => state.city);
  const { countries } = useAppSelector((state) => state.country);

  return (
    <MainLayout title="Тесты">
      <div className="tests">
        <CountryForm />
        <CityForm countries={countries} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
        <div>
          {countries.map((country) => (
            <div key={country.id}>{country.name}</div>
          ))}
        </div>
        <div>
          {cities.map((city) => (
            <div key={city.id}>
              {city.name} | {city.country.name}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  await store.dispatch(getCountries());
  await store.dispatch(getCities());
  return { props: {} };
});

export default Tests;
