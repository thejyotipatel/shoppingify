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
  Switch,
  useBoolean,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { HiMinus, HiPencil, HiPlus } from 'react-icons/hi'
import img from '../images/source.svg'

const ShoppingList = () => {
  const [complete, setComplete] = useBoolean()
  return (
    <>
      <VStack
        p={'4'}
        bgColor={'green.100'}
        width={'100%'}
        maxW='400px'
        height={'100vh'}
        minH={'fit-content'}
      >
        <Flex
          borderRadius={'lg'}
          width={'90%'}
          height={'20%'}
          bgColor={'teal.600'}
        >
          <Image src={img} alt='Dan Abramov' />
          <VStack justifyContent='center'>
            <Text color={'white'} fontSize={'1.2em'} textAlign='left'>
              Didn't find what you need?
            </Text>
            <Button>Add item</Button>
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

        <Flex
          width={'100%'}
          justifyContent={'space-between'}
          alignItems='center'
        >
          <Switch
            colorScheme='green'
            color={'green.300'}
            size='lg'
            onChange={setComplete.toggle}
          />
          <Text
            textDecoration={complete ? 'line-through' : 'none'}
            fontSize='18px'
          >
            Avocoda
          </Text>

          <Flex alignItems={'center'}>
            <IconButton
              colorScheme={'green'}
              backgroundColor={'green.500'}
              color={'gray.50'}
              size='sm'
              icon={<HiMinus />}
            />
            <Text color='green' p={'0.5em'}>
              3 pcs
            </Text>

            <IconButton
              colorScheme={'green'}
              backgroundColor={'green.500'}
              color={'gray.50'}
              size='sm'
              icon={<HiPlus />}
            />
          </Flex>
        </Flex>
        <Flex width={'100%'} justifyContent={'space-between'}>
          <Switch
            colorScheme='green'
            color={'green.300'}
            size='lg'
            onChange={setComplete.toggle}
          />
          <Text
            textDecoration={complete ? 'line-through' : 'none'}
            fontSize='18px'
          >
            Avocoda
          </Text>

          <Flex alignItems={'center'}>
            <IconButton
              colorScheme={'green'}
              backgroundColor={'green.500'}
              color={'gray.50'}
              size='sm'
              icon={<HiMinus />}
            />
            <Text color='green' p={'0.5em'}>
              3 pcs
            </Text>

            <IconButton
              colorScheme={'green'}
              backgroundColor={'green.500'}
              color={'gray.50'}
              size='sm'
              icon={<HiPlus />}
            />
          </Flex>
        </Flex>
      </VStack>
    </>
  )
}

export default ShoppingList
