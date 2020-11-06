import * as React from 'react';
import { View,ActivityIndicator,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux'

// Helper Functions
import NavigationService from './NavigationService';

// Screen imports
import Posts from './Screens/Main/Posts';
import PostDetail from './Screens/Main/PostDetail';

// Root and main Stacks Initilization
const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

//Main Stack
function Main() {

    return (
      <MainStack.Navigator headerMode='none' >
        <MainStack.Screen name="Posts" component={Posts} />
        <MainStack.Screen name="PostDetail" component={PostDetail} />
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
