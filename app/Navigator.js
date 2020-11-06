import * as React from 'react';
import { View,ActivityIndicator,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'

// Helper Functions
import NavigationService from './NavigationService';

//Home Screen
import Posts from './Screens/Main/Posts';

// Root and main Stacks Initilization
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

//Main Stack
function Main() {

    return (
      <MainStack.Navigator  >
        <MainStack.Screen name="Posts" component={Posts} />
      </MainStack.Navigator>
    );
  }

//Root Navigator
function AppNavigator() {
  return (
    <NavigationContainer ref={navigatorRef => {
         NavigationService.setTopLevelNavigator(navigatorRef)}}>
      <RootStack.Navigator headerMode='none' >
        <RootStack.Screen name="After" component={Main} /> 
      </RootStack.Navigator> 
    </NavigationContainer>
  );
}


export default AppNavigator;
