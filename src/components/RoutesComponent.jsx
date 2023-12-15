import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home/Home';
import Service from '../views/Service/Service';
import Repair from '../views/Repair/Repair';
import Sales from '../views/Sales/Sales';

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/repair" element={<Repair />} />
      <Route path="/sales" element={<Sales />} />
    </Routes>
  );
}
