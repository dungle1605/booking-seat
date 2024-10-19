import * as ROUTES from '../constants/routes';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import StaffLogin from '../components/login/StaffLogin';

// Revert back to history v4.10.0 because
// v5.0 breaks navigation
export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Routes>
        <Route path='/' element={<StaffLogin />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
