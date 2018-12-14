import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/home'
import AddDishes from './components/addDishes';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} title="Sp/itr" />
        <Scene key="AddDishes" component={AddDishes} title="Sp/itr" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
