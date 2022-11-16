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
  InputLeftElement,
  Flex,
  Stack,
  Highlight,
  Wrap,
  WrapItem,
  Center,
  VStack,
  Container,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Link,
} from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'
import { HiPencil } from 'react-icons/hi'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import img from '../images/img.jpg'
import { useAppContext } from '../context/appContext'
const Details = {
  image: img,
  name: 'pineapple',
  category: 'fruit and vegetable',
  note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque vero culpa, corporis nihil quibusdam expedita dolor veritatis sequi id ipsum quis perferendis. Deserunt labore, aliquam illo veniam optio voluptatibus.',
}
const DetailItem = () => {
  const { listOfItems } = useAppContext()
  return (
    <VStack
      p={'4'}
      width={'100%'}
      maxW='400px'
      height={'100vh'}
      minH={'fit-content'}
      position={'relative'}
    >
      <Link
        width={'inherit'}
        href='#'
        justifyContent={'left'}
        alignItems='center'
        display={'flex'}
        color='green.500'
        fontSize='1.2em'
        gap={'1'}
        textAlign='left'
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Icon fontSize='1.5em' as={MdOutlineKeyboardBackspace} />
        back
      </Link>
      <Box w={'100%'} py='4'>
        <Image src={Details.image} alt='img' borderRadius={'2xl'} />
        <VStack w={'inherit'} py='4'>
          <Text
            fontSize={'xs'}
            fontWeight='bold'
            color={'green.200'}
            textAlign={'left'}
            w='inherit'
          >
            Name
          </Text>
          <Text fontWeight={'500'} textAlign={'left'} w='inherit'>
            {Details.name}
          </Text>
        </VStack>
        <VStack py='4' w='inherit'>
          <Text
            fontSize={'xs'}
            fontWeight='bold'
            color={'green.200'}
            textAlign={'left'}
            w='inherit'
          >
            Category
          </Text>
          <Text fontWeight={'500'} textAlign={'left'} w='inherit'>
            {Details.category}
          </Text>
        </VStack>
        <VStack py='4' w='inherit'>
          <Text
            fontSize={'xs'}
            fontWeight='bold'
            color={'green.200'}
            textAlign={'left'}
            w='inherit'
          >
            Note
          </Text>
          <Text fontWeight={'500'} textAlign={'justify'} w='inherit'>
            {Details.note}
          </Text>
        </VStack>
        {/* <Flex py={'4'} width={'inherit'} justifyContent='space-evenly'>
          <Button color={'gray.400'} variant='unstyled'>
            Delete
          </Button>
          <Button colorScheme={'green'}>Add to list</Button>
        </Flex> */}
      </Box>
      <Flex
        position={'fixed'}
        bottom='0px'
        maxW={'400px'}
        width={'100%'}
        justifyContent='space-evenly'
        bgColor={'gray.50'}
      >
        <Button
          width='100%'
          variant={'unstyled'}
          color={'gray.400'}
          py={'5'}
          fontSize={'xl'}
          fontWeight={'bold'}
        >
          Cancel list
        </Button>
        <Button
          height={'100%'}
          py={'5'}
          width='100%'
          variant={'solid'}
          colorScheme='green'
          borderRadius={0}
          fontSize={'xl'}
          fontWeight={'bold'}
        >
          Add to list
        </Button>
      </Flex>
    </VStack>
  )
}

export default DetailItem
