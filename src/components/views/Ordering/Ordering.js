import React from 'react';
import styles from './Ordering.scss';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Ordering = () => (
  <div className={styles.component}>
    <h2>Ordering view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`}>New Order</Link>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/:id`}>Order id</Link>
      <Button variant='outlined' size='small' color='secondary'>Click me</Button>
    </div>
  </div>
);

export default Ordering;