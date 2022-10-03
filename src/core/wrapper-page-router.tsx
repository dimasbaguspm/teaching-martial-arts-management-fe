import React, { FC } from 'react';

import { Navigate, Outlet } from 'react-router-dom';

import { PAGE_PATH } from 'constants/page-path';
import { useAppConnect } from 'hooks/use-app-connect';

export interface IWrapperPageRouter {
  isPrivateAuthenticated?: boolean;
  isPrivateUnauthenticated?: boolean;
}
const WrapperPageRouter: FC<IWrapperPageRouter> = ({ isPrivateAuthenticated, isPrivateUnauthenticated }) => {
  const { session } = useAppConnect();

  console.log(session);
  if (!session && isPrivateAuthenticated) {
    return <Navigate to={PAGE_PATH.LOGIN} replace />;
  }

  // user already connect, but they try to
  if (session && isPrivateUnauthenticated) {
    return <Navigate to={PAGE_PATH.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default WrapperPageRouter;
