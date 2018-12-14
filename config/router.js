import React from 'react';
import { createStackNavigator, creatAppContainer } from 'react-navigation';

import AddDishes from '../screens/addDishes';
import Home from '../screens/home';

const RootStack = createStackNavigator(
  {
    AddNames: Home,
    AddDishes: AddDishes
  },
  {
    initialRouteName: "AddNames"
  }
);

export const AppContainer = createAppContainer(RootStack);
