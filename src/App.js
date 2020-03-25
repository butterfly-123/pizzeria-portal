import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Kitchen from './components/views/Kitchen/Kitchen';
import Login from './components/views/Login/Login';
import Ordering from './components/views/Ordering/Ordering';
import OrderNew from './components/views/Ordering/OrderNew';
import OrderingOrderID from './components/views/Ordering/OrderingOrderID';
import Tables from './components/views/Tables/Tables';
import TablesBookingID from './components/views/Tables/TablesBookingID';
import TablesEventID from './components/views/Tables/TablesEventID';
import { Provider } from 'react-redux';
import store from './redux/store';
// import NewOrderContainer from './components/views/Ordering/NewOrderContainer';

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering'} component={Ordering} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/new'} component={OrderNew} />
          <Route exact path={process.env.PUBLIC_URL + '/ordering/order/:id'} component={OrderingOrderID} />
          <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={TablesBookingID} />
          <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={TablesEventID} />
        </Switch>
      </MainLayout>
    </Provider>
  );
}

export default App;
