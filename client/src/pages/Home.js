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
  Container,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import ShoppingList from '../layout/ShoppingList'

const Data = [
  { item: 'avacado' },
  { item: 'mango' },
  { item: 'banana' },
  // category: 'Meat anf Fish',
  // list: ['salmon 1kg', 'Pork', 'Checken 1kg'],
  // category: 'Beverages',
  // list: ['avacado', 'Pork', 'Checken 1kg', 'mango', 'banana'],
]
const Home = () => {
  return (
    <>
      <Flex>
        <Box m={4}>
          <Stack direction={{ base: 'column', md: 'row' }} gap={'8'}>
            <Text fontSize='1.5em' maxW={'30ch'} textAlign={'left'}>
              <Highlight
                query='Shoopingify'
                styles={{
                  px: '1',
                  py: '1',
                  color: 'green.500',
                  fontWeight: '800',
                }}
              >
                Shoopingify allows you take your shopping list wherever you go
              </Highlight>
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<RiSearchLine color='gray.300' />}
              />
              <Input type='text' placeholder='search item' />
            </InputGroup>
          </Stack>
          <Text textAlign={'left'} fontSize='1.2em' fontWeight={'400'} mt={'8'}>
            Meat anf Fish
          </Text>
          <Wrap mt={'8'} spacing='8'>
            {Data.map((item, index) => {
              return (
                <WrapItem key={index}>
                  <Flex
                    minW={'180px'}
                    minH={'80px'}
                    _hover={{
                      boxShadow: 'lg',
                    }}
                    cursor={'pointer'}
                    align='center'
                    justifyContent={'space-evenly'}
                    bg='green.100'
                    borderRadius={'md'}
                    textTransform='capitalize'
                    boxShadow={'md'}
                  >
                    {item.item}
                    <Icon
                      color={'green.500'}
                      fontSize='2xl'
                      as={AiOutlinePlus}
                    />
                  </Flex>
                </WrapItem>
              )
            })}

            {Data.map((item, index) => {
              return (
                <WrapItem key={index}>
                  <Flex
                    minW={'180px'}
                    minH={'80px'}
                    cursor={'pointer'}
                    align='center'
                    justifyContent={'space-evenly'}
                    bg='green.100'
                    borderRadius={'md'}
                    textTransform='capitalize'
                    boxShadow={'md'}
                  >
                    {item.item}
                    <Icon
                      color={'green.500'}
                      fontSize='2xl'
                      as={AiOutlinePlus}
                    />
                  </Flex>
                </WrapItem>
              )
            })}
          </Wrap>
          <Text textAlign={'left'} fontSize='1.2em' fontWeight={'400'} mt={'8'}>
            Meat anf Fish
          </Text>
          <Wrap mt={'8'} spacing='8'>
            {Data.map((item, index) => {
              return (
                <WrapItem key={index}>
                  <Flex
                    minW={'180px'}
                    minH={'80px'}
                    cursor={'pointer'}
                    align='center'
                    justifyContent={'space-evenly'}
                    bg='green.100'
                    borderRadius={'md'}
                    textTransform='capitalize'
                    boxShadow={'md'}
                  >
                    {item.item}
                    <Icon
                      color={'green.500'}
                      fontSize='2xl'
                      as={AiOutlinePlus}
                    />
                  </Flex>
                </WrapItem>
              )
            })}
          </Wrap>
        </Box>
        <ShoppingList />
      </Flex>
    </>
  )
}

export default Home
