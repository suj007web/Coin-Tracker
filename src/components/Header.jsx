import {
  HStack,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'10'}
        left={'5'}
        bg="#FFD700" 
        p={'2'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}
        color={'black'}
      >
        <BiMenuAltLeft size={20} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Coin Tracker</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={'unstyled'} onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button variant={'unstyled'} onClick={onClose}>
                <Link to={'/exchanges'}>Exchanges</Link>
              </Button>
              <Button variant={'unstyled'} onClick={onClose}>
                <Link to={'/coins'}>Coins</Link>
              </Button>
            </VStack>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
