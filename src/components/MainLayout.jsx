import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <p>Header</p>
      <Outlet />
      <p>footer</p>
    </>
  );
};

export default MainLayout;
