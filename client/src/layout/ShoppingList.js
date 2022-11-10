import React from 'react'
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tooltip,
  Icon,
  Text,
  Image,
  Button,
  IconButton,
  HStack,
  InputGroup,
  Input,
  InputLeftElement,
  Flex,
  Stack,
  Highlight,
  Wrap,
  WrapItem,
  Center,
  VStack,
  Container,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { HiPencil } from 'react-icons/hi'
const ShoppingList = () => {
  return (
    <>
      <VStack
        p={'4'}
        bgColor={'green.100'}
        color='blackAlpha.900'
        width={'100%'}
        maxW='400px'
      >
        <Flex>
          Header
          <VStack>
            <Text>Didn't find what you nedd?</Text>
            <Button variant={'solid'} colorScheme='gray'>
              Add item
            </Button>
          </VStack>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Text fontSize='1.5em' fontWeight={'600'} textAlign={'left'}>
            Shooping list
          </Text>
          <IconButton
            variant={'unstyled'}
            icon={<HiPencil fontSize={'1.5em'} color={'gray.400'} />}
          />
        </Flex>
        <Text
          width={'inherit'}
          textAlign={'left'}
          fontSize='12px'
          fontWeight={'600'}
          py={'4'}
          color='gray.500'
        >
          Meat and fish
        </Text>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Text fontSize='18px'>Avocoda</Text>
          <Button variant={'outline'} colorScheme='green' p={'0.5em'}>
            3 pcs
          </Button>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Text fontSize='18px'>Avocoda</Text>
          <Button variant={'outline'} colorScheme='green' p={'0.5em'}>
            3 pcs
          </Button>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Text fontSize='18px'>Avocoda</Text>
          <Button variant={'outline'} colorScheme='green' p={'0.5em'}>
            3 pcs
          </Button>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Text fontSize='18px'>Avocoda</Text>
          <Button variant={'outline'} colorScheme='green' p={'0.5em'}>
            3 pcs
          </Button>
        </Flex>
      </VStack>
    </>
  )
}

export default ShoppingList
