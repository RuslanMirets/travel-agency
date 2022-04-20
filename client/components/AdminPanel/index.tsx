import { Box, Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import { AdminComplex } from './AdminComplex';
import { AdminHotel } from './AdminHotel';
import styles from './AdminPanel.module.scss';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  );
}

export const AdminPanel: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.root}>
      <Paper className={styles.paper}>
        <Box className={styles.boxTabs} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Строение" />
            <Tab label="Отель" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <AdminComplex />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AdminHotel />
        </TabPanel>
      </Paper>
    </Box>
  );
};
