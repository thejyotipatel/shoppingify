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
const Data = [
  { item: 'avacado' },
  { item: 'mango' },
  { item: 'banana' },
  { item: 'avacado' },
  { item: 'mango' },
  { item: 'banana' },
  // category: 'Meat anf Fish',
  // list: ['salmon 1kg', 'Pork', 'Checken 1kg'],
  // category: 'Beverages',
  // list: ['avacado', 'Pork', 'Checken 1kg', 'mango', 'banana'],
]
const Home = () => {
  const [searchItems, setSearchItems] = useState('')
  const [filterList, setFilterList] = useState(Data)
  const { listOfItems } = useAppContext()

  const handleSearch = () => {
    if (query.length >= 1) {
      let list = listOfItems.filter((item) => {
        return item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      })
      let c = 'mvmn'
      c.toLowerCase()
      setFilterList(...list)
    } else {
      setFilterList(listOfItems)
    }
  }

  return (
    <>
      <Grid gridTemplateColumns={'73% 27%'} justify-items={'stretch'}>
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
                value={searchItems}
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
            {listOfItems.map((item) => {
              return <Item key={item.id} name={item.name} />
            })}
          </Wrap>
        </Box>
        {/* <ShoppingList /> */}
        <AddItemsList />
        <DetailItem />
      </Grid>
    </>
  )
}

export default Home
