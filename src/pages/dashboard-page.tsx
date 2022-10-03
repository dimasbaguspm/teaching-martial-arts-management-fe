import React from 'react';

import { useAppConnect } from 'hooks/use-app-connect';

const DashboardPage = () => {
  const { session } = useAppConnect();

  return <div>DashboardPage - {session?.identityLogin.name}</div>;
};

export default DashboardPage;
