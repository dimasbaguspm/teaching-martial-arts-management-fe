import React from 'react';

import { useAppConnect } from 'hooks/use-app-connect';
import AuthenticatedPageLayout from 'components/layouts/authenticated-page-layout';

const DashboardPage = () => {
  const { session } = useAppConnect();

  return (
    <AuthenticatedPageLayout>
      <div>DashboardPage - {session?.identityLogin.name}</div>
    </AuthenticatedPageLayout>
  );
};

export default DashboardPage;
