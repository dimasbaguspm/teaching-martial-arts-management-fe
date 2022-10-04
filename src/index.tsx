import React from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';
import PageRouter from 'core/page-router';
import ContextWrapper from 'core/context-wrapper';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ContextWrapper>
        <PageRouter />
      </ContextWrapper>
    </ChakraProvider>
  </React.StrictMode>
);
