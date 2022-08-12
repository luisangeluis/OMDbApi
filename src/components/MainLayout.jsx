import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <p>footer</p>
    </>
  );
};

export default MainLayout;
