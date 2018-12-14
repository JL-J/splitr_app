import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddDishes from '../screens/addDishes';
import Home from '../screens/home';
import AddPeopleToDishes from '../screens/addPeopleToDishes';


const RootStack = createStackNavigator(
  {
    AddNames: Home,
    AddDishes: AddDishes,
    Assignment: AddPeopleToDishes
  },
  {
    initialRouteName: "AddNames"
  }
);

export const AppContainer = createAppContainer(RootStack);
