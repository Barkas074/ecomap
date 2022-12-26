import React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/app.css';
import './styles/map.css';
import Map from './components/Map';
import Information from './components/Information';


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
        <TabPanel value="1" style={{ padding: '0' }}>
          <Map />
        </TabPanel >
        <TabPanel value="2"><h1 style={{ textAlign: 'center' }}>Раздел в разработке</h1></TabPanel>
        <TabPanel value="3" style={{ padding: '0' }}>
          <Information />
        </TabPanel>
      </TabContext >
    </>
  );
}

export default App;
