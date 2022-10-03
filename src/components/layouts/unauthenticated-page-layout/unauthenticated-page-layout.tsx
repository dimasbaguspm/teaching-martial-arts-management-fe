import { Flex } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';

export interface IUnauthenticatedPageLayout {
  children: ReactNode;
}

const UnauthenticatedPageLayout: FC<IUnauthenticatedPageLayout> = ({ children }) => {
  return (
    <Flex
      position='relative'
      bgColor='gray.200'
      minHeight='100vh'
      minWidth='100vw'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'>
      {children}
    </Flex>
  );
};

export default UnauthenticatedPageLayout;
