import React, { FC, useEffect } from 'react';

import { Box, Button, Divider, Flex, Heading, Input, Stack, Textarea, VStack } from '@chakra-ui/react';
import AuthenticatedPageLayout from 'components/layouts/authenticated-page-layout';
import { useNavigatorContext } from 'contexts/navigate-context';
import { useNavigate } from 'react-router-dom';
import { PAGE_PATH } from 'constants/page-path';

const AddUserPage: FC = () => {
  const { setIsVisible } = useNavigatorContext()!;

  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(false);

    return () => setIsVisible(true);
  }, []);
  // NOTE: need a validation form here
  return (
    <AuthenticatedPageLayout>
      <VStack w='100%' alignItems='center' pt={5}>
        <Heading textAlign='center' size='md' onClick={() => navigate(PAGE_PATH.DASHBOARD)}>
          Tambah Anggota
        </Heading>
        <Box w='90%'>
          <Stack w='100%' spacing={4}>
            <Input borderColor='teal.300' borderWidth={2} variant='outline' placeholder='Nama anggota' />
            <Input borderColor='teal.300' borderWidth={2} variant='outline' placeholder='Tingkat' />
            <Input borderColor='teal.300' borderWidth={2} variant='outline' placeholder='Kelas (opsional)' />
            <Input borderColor='teal.300' borderWidth={2} variant='outline' placeholder='Berat Badan' />
            <Input borderColor='teal.300' borderWidth={2} variant='outline' placeholder='Tinggi Badan' />
            <Textarea borderColor='teal.300' borderWidth={2} placeholder='Keterangan (opsional)' />
          </Stack>
        </Box>

        <Divider pt={2} w='90%' borderBottomWidth={2} borderColor='teal.500' />

        <Button bgColor='teal.300' w='90%'>
          Gunakan File Backup
        </Button>

        <Button position='absolute' bottom='5' bgColor='teal.300' w='90%' mt={15} h='50px'>
          Tambahkan Anggota
        </Button>
      </VStack>
    </AuthenticatedPageLayout>
  );
};

export default AddUserPage;
