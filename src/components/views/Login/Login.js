import React from 'react';
import styles from './Login.scss';
import { Button } from '@material-ui/core';

const Login = () => (
  <div className={styles.component}>
    <h2>Login view</h2>
    <Button variant='outlined' size='small' color='secondary'>Click me</Button>
  </div>
);

export default Login;