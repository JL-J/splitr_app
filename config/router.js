import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddDishes from '../screens/addDishes';
import Home from '../screens/home';
import PickerPage from '../screens/picker';
import AddTrip from '../screens/addTrip';

const RootStack = createStackNavigator(
  {
    AddTrip: AddTrip,
    AddNames: Home,
    AddDishes: AddDishes,
    Picker: PickerPage
  },
  {
    initialRouteName: "AddTrip"
  }
);

export const AppContainer = createAppContainer(RootStack);
