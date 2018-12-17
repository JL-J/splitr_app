// // Import navigation tools
// import React from 'react';
// import { Platform } from 'react-native';
// import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
//
// // Import screens
// import Home from '../src/components/home'
// import AddReceipt from '../src/components/addReceipt'
//
//
// // HOMESTACK
// const HomeStack = createStackNavigator({
//   Home: {screen: Home}
// });
// HomeStack.navigationOptions = {
//   tabBarLabel: 'Home'
// };
// const AppContainerHome = createAppContainer(HomeStack);
//
// // ADD RECEIPT STACK
// const AddReceiptStack = createStackNavigator({
//   AddReceipt: {screen: AddReceipt}
// });
// AddReceiptStack.navigationOptions = {
//   tabBarLabel: 'Dishes'
// };
// const AppContainerDish = createAppContainer(HomeStack);
//
//
// export default createBottomTabNavigator({
//   AppContainerHome,
//   AppContainerDish,
//   HomeStack,
//   AddReceiptStack
// });
