import * as ROUTES from "../constants/routes";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import UserLogin from "../components/login/UserLogin";
import HomePage from "../components/home/homePage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <BrowserRouter history={history}>
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route
        path={ROUTES.USER_SIGNIN}
        element={<UserLogin history={history} />}
      />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
