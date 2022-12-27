import React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import 'leaflet/dist/leaflet.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/app.css';
import './styles/map.css';
import Map from './components/Map';
import Information from './components/Information';
import ListAddresses from './components/ListAddresses';
import * as constants from './constants/defaultConstants'
import { TempleBuddhist } from '@mui/icons-material';
import DataContainers from './data/cks-containers.json'
import getDistanceFromLatLonInKm from './helpers/getDistanceFromLatLonInKm'


function App() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" variant="fullWidth" indicatorColor='inherit' textColor='inherit'>
            <Tab label="Карта" value="1" />
            <Tab label="Рядом" value="2" />
            <Tab label="Полезное" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={{ p: 0 }} value="1">
          <Map switchingToRecommendations={() => { handleChange(null, '3') }} />
        </TabPanel >
        <TabPanel sx={{ p: 0 }} value="2">
          <ListAddresses />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value="3">
          <Information />
        </TabPanel>
      </TabContext >
    </>
  );
}

export default App;
