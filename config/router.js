import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddDishes from '../screens/addDishes';
import Home from '../screens/home';
import Picker from '../screens/picker';

const RootStack = createStackNavigator(
  {
    AddNames: Home,
    AddDishes: AddDishes,
    Picker: Picker
  },
  {
    initialRouteName: "AddNames"
  }
);

export const AppContainer = createAppContainer(RootStack);
