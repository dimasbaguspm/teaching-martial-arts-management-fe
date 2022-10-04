import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { RiBodyScanLine } from 'react-icons/ri';
import { IoCalculatorOutline, IoPeopleCircleOutline, IoFolderOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { useNavigatorContext } from 'contexts/navigate-context';
import { PAGE_PATH } from 'constants/page-path';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const { isVisible } = useNavigatorContext()!;
  const navigate = useNavigate();

  if (!isVisible) {
    return null;
  }

  return (
    <Flex
      position='absolute'
      bottom='0'
      width='100vw'
      bgColor='gray.100'
      height='16'
      alignItems='center'
      justifyContent='space-between'
      px={5}>
      <Box>
        <IoCalculatorOutline size={35} />
      </Box>
      <Box>
        <IoPeopleCircleOutline size={35} onClick={() => navigate(PAGE_PATH.ADD_USER)} />
      </Box>
      <Box>
        <Box bgColor='teal.200' p={3} borderRadius='50%' transform='translateY(-15px)'>
          <RiBodyScanLine size={40} />
        </Box>
      </Box>
      <Box>
        <IoFolderOutline size={35} />
      </Box>
      <Box>
        <IoPersonCircleOutline size={35} />
      </Box>
    </Flex>
  );
};

export default Navigation;
