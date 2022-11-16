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
  Grid,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import ShoppingList from '../layout/ShoppingList'
import AddItemsList from '../layout/AddItemsList'
import DetailItem from '../layout/DetailItem'
import { useState } from 'react'
import { useAppContext } from '../context/appContext'
import Item from '../components/Item'
import { useEffect } from 'react'
const Data = [
  { item: 'avacado' },
  { item: 'mango' },
  { item: 'banana' },
  { item: 'avacado' },
  { item: 'mango' },
  { item: 'banana' },
]
const Home = () => {
  const { listOfItems } = useAppContext()
  const [searchItems, setSearchItems] = useState('')

  return (
    <>
      <Box scrollBehavior={'contant'} m={4}>
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
            <Input
              // value={searchItems}
              onChange={(e) => setSearchItems(e.target.value)}
              type='text'
              placeholder='Search item'
              borderColor={'green.100'}
              borderWidth='0.12em'
              _hover={{
                borderColor: 'green.300',
              }}
              _focusVisible={{
                borderColor: 'green.300',
              }}
            />
          </InputGroup>
        </Stack>
        <Text textAlign={'left'} fontSize='1.2em' fontWeight={'400'} mt={'8'}>
          Meat and Fish
        </Text>
        <Wrap mt={'8'} spacing='8'>
          {listOfItems
            .filter((item) => item.name.toLowerCase().includes(searchItems))
            .map((items) => {
              return <Item key={items.id} {...items} />
            })}
        </Wrap>
      </Box>
    </>
  )
}

export default Home
