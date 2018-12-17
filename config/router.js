import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddDishes from '../screens/addDishes';
import Home from '../screens/home';
import PickerPage from '../screens/picker';

const RootStack = createStackNavigator(
  {
    AddNames: Home,
    AddDishes: AddDishes,
    Picker: PickerPage
  },
  {
    initialRouteName: "AddNames"
  }
);

export const AppContainer = createAppContainer(RootStack);
