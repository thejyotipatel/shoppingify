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
} from '@chakra-ui/react'
import { RiBarChartBoxLine, RiListCheck, RiHistoryLine } from 'react-icons/ri'

const Sidebar = () => {
  return (
    <Tabs align='center' orientation='vertical' w={'100%'} h={'100%'}>
      <TabList gap={'4'}>
        <Tab
          _selected={{ color: 'green.500', borderColor: 'green.500' }}
          _hover={{ color: 'green.500', borderColor: 'green.500' }}
        >
          <Tooltip
            hasArrow
            placement='right'
            colorScheme={'black'}
            label='Items'
            aria-label='Items'
          >
            <span>
              <Icon as={RiListCheck} w={6} h={6} />
            </span>
          </Tooltip>
        </Tab>
        <Tab
          _selected={{ color: 'green.500', borderColor: 'green.500' }}
          _hover={{ color: 'green.500', borderColor: 'green.500' }}
        >
          <Tooltip
            hasArrow
            placement='right'
            colorScheme={'black'}
            label='History'
            aria-label='History'
          >
            <span>
              <Icon as={RiHistoryLine} w={6} h={6} />
            </span>
          </Tooltip>
        </Tab>
        <Tab
          _selected={{ color: 'green.500', borderColor: 'green.500' }}
          _hover={{ color: 'green.500', borderColor: 'green.500' }}
        >
          <Tooltip
            hasArrow
            placement='right'
            colorScheme={'black'}
            label='Statistics'
            aria-label='Statistics'
          >
            <span>
              <Icon as={RiBarChartBoxLine} w={6} h={6} />
            </span>
          </Tooltip>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Sidebar
