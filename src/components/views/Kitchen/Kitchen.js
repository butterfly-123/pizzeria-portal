import React from 'react';
import styles from './Kitchen.scss';
import { Button } from '@material-ui/core';


const Kitchen = () => (
  <div className={styles.component}>
    <h2>Kitchen view</h2>
    <Button variant='outlined' size='small' color='secondary'>Click me</Button>
  </div>
);

export default Kitchen;