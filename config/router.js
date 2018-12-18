import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import AddDishes from '../screens/addDishes';
import AddNames from '../screens/addNames';
import PickerPage from '../screens/picker';
import AddTrip from '../screens/addTrip';

const RootStack = createStackNavigator(
  {
    AddTrip: AddTrip,
    AddNames: AddNames,
    AddDishes: AddDishes,
    Picker: PickerPage
  },
  {
    initialRouteName: "AddTrip"
  }
);

export const AppContainer = createAppContainer(RootStack);
