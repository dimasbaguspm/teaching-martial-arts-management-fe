import React from 'react';

import { PAGE_PATH } from 'constants/page-path';
import {
  DashboardPage,
  PresencePage,
  AddPresencePage,
  SinglePresencePage,
  AddUserPage,
  SearchUserPage,
  SingleUserPage,
  NotFoundPage,
  LoginPage,
  RegisterPage,
} from 'pages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivatePageWrapper from './wrapper-page-router';

const PageRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivatePageWrapper isPrivateUnauthenticated />}>
          <Route path={PAGE_PATH.LOGIN} element={<LoginPage />} />
          <Route path={PAGE_PATH.REGISTER} element={<RegisterPage />} />
        </Route>

        <Route element={<PrivatePageWrapper isPrivateAuthenticated />}>
          <Route path={PAGE_PATH.DASHBOARD} element={<DashboardPage />} />

          <Route path={PAGE_PATH.PRESENCE} element={<PresencePage />} />
          <Route path={PAGE_PATH.ADD_PRESENCE} element={<AddPresencePage />} />
          <Route path={PAGE_PATH.SINGLE_PRESENCE} element={<SinglePresencePage />} />

          <Route path={PAGE_PATH.ADD_USER} element={<AddUserPage />} />
          <Route path={PAGE_PATH.SEARCH_USER} element={<SearchUserPage />} />
          <Route path={PAGE_PATH.SINGLE_USER} element={<SingleUserPage />} />
          <Route path={PAGE_PATH.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
