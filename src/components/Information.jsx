import React from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import InfoCompany from './InfoCompany';
import Recommendations from './Recommendations';
import Markings from './Markings';

function Information() {
    const [value, setValue] = React.useState('5');

    const handleChange = (event, newValue) => {
      setValue(newValue);
  }

    return (
        <>
        
        <TabContext value={value}>
          <Box bx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth" indicatorColor='inherit' textColor='inherit'>
              <Tab label="Инстанции" value="4" />
              <Tab label="Рекомендации" value="5" />
              <Tab label="Маркировки" value="6" />
            </TabList>
          </Box>
          <TabPanel value="4" style={{ padding: '0' }}>
          <InfoCompany />
          </TabPanel>
          <TabPanel value="5" style={{ padding: '0' }}>
          <Recommendations />
          </TabPanel>
          <TabPanel value="6" style={{ padding: '0' }}>
          <Markings />
          </TabPanel>        
        </TabContext >
      </>
    )
    
}

export default Information;