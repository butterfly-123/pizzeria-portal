import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-transition';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
