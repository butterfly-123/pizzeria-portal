import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <MainLayout>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
        <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
