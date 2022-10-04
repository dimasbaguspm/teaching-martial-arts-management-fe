import React, { FC, ReactNode } from 'react';

import { Flex } from '@chakra-ui/react';

export interface IAuthenticatedPageLayout {
  children: ReactNode;
}
const AuthenticatedPageLayout: FC<IAuthenticatedPageLayout> = ({ children }) => {
  return (
    <Flex position='relative' bgColor='gray.200' minHeight='100vh' minWidth='100vw' overflow='hidden'>
      {children}
    </Flex>
  );
};

export default AuthenticatedPageLayout;
