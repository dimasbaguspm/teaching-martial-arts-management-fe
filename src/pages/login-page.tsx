import React, { MouseEvent } from 'react';

import { Box, Button, Heading, Input, Stack, Text, useToast } from '@chakra-ui/react';
import UnauthenticatedPageLayout from 'components/layouts/unauthenticated-page-layout/unauthenticated-page-layout';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/page-path';
import { APP_ENV } from 'constants/app-environment';
import { useAppConnect } from 'hooks/use-app-connect';

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { handleLogin } = useAppConnect();

  const onSignInClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast({
      title: 'Proses masuk',
      variant: 'left-accent',
    });
    await handleLogin();
  };

  return (
    <UnauthenticatedPageLayout>
      <Box width='80%'>
        <Stack spacing={4} bgColor='gray.100' p={4} borderRadius={10}>
          <Heading size='sm' textAlign='center'>
            {APP_ENV.APP_TITLE}
          </Heading>
          <Input placeholder='Masukkan Username' />
          <Input placeholder='Masukkan Katasandi' />
          <Button bgColor='teal.300' onClick={onSignInClick}>
            Masuk
          </Button>
        </Stack>
        <Text
          mt={5}
          textAlign='center'
          color='teal.600'
          textDecoration='underline'
          onClick={() => navigate(PAGE_PATH.REGISTER)}>
          Belum punya akun? klik disini
        </Text>
      </Box>
      <Text position='absolute' bottom={0} left='50%' transform='translateX(-50%)'>
        Created by Dimas M
      </Text>
    </UnauthenticatedPageLayout>
  );
};

export default LoginPage;
