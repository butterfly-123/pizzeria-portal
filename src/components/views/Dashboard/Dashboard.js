import React from 'react';
import styles from './Dashboard.scss';
import { Button } from '@material-ui/core';


const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard view</h2>
    <Button variant='outlined' size='small' color='secondary'>Click me</Button>
  </div>
);

export default Dashboard;