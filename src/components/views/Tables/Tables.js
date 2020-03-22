import React from 'react';
import styles from './Tables.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/Tables/booking/:id`}>Book Table</Link>
      <Link to={`${process.env.PUBLIC_URL}/Tables/event/:id`}>Event Table</Link>
      <Button variant='outlined' size='small' color='secondary'>Click me</Button>
    </div>
  </div>
);

export default Tables;