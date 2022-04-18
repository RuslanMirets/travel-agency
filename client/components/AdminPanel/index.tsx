import { Box, Paper, Tab, Tabs } from '@mui/material';
import React from 'react';
import { AdminComplex } from '../AdminComplex';
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
      <Paper className={styles.paperTabs}>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Tab label="Строение" />
          <Tab label="Отель" />
        </Tabs>
      </Paper>

      <Paper className={styles.paperTab}>
        <TabPanel value={value} index={0}>
          <AdminComplex />
        </TabPanel>
        <TabPanel value={value} index={1}>
          2
        </TabPanel>
      </Paper>
    </Box>
  );
};
