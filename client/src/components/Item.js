import React from 'react'
import { Wrap, WrapItem, Flex, Button, IconButton } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
const Item = ({ name }) => {
  return (
    <WrapItem>
      <Flex
        minW={'180px'}
        minH={'80px'}
        _hover={{
          boxShadow: 'lg',
        }}
        bg='green.100'
        borderRadius={'md'}
        boxShadow={'md'}
      >
        <Button
          textTransform='capitalize'
          width={'90%'}
          minH={'80px'}
          fontWeight='normal'
          fontSize='18px'
          variant={'unstyled'}
          _hover={{
            bgColor: 'green.500',
            color: 'gray.100',
          }}
        >
          {name}
        </Button>
        <IconButton
          color={'green.500'}
          fontSize='2xl'
          width={'50%'}
          alignItems='center'
          display={'flex'}
          justifyContent={'center'}
          minH={'80px'}
          variant={'unstyled'}
          _hover={{
            bgColor: 'green.500',
            color: 'gray.100',
          }}
          onClick={() => console.log('e')}
          icon={<AiOutlinePlus />}
        />
      </Flex>
    </WrapItem>
  )
}

export default Item
