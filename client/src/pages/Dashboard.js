import React from 'react'
import { Grid, Box, Alert, AlertIcon } from '@chakra-ui/react'
import Sidebar from '../layout/Sidebar'
import Home from './Home'
import AddItemsList from '../layout/AddItemsList'
import { useAppContext } from '../context/appContext'
import ShoppingList from '../layout/ShoppingList'
import DetailItem from '../layout/DetailItem'
const Dashboard = () => {
  const { showAlert, alertText, alertType } = useAppContext()
  return (
    <>
      {showAlert && (
        <Alert
          position={'absolute'}
          top={'1em'}
          left='38vw'
          width='fit-content'
          status={alertType}
          fontSize={'xl'}
        >
          <AlertIcon />
          {alertText}
        </Alert>
      )}
      <Grid gridTemplateColumns={'73% 27%'} justify-items={'stretch'}>
        <Box>
          <Sidebar />
        </Box>
        {/* <ShoppingList /> */}
        {/* <AddItemsList /> */}
        <DetailItem />
      </Grid>
    </>
  )
}

export default Dashboard
