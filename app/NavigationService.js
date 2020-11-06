// This file contains all common navigator method()
import { CommonActions } from '@react-navigation/native';
let _navigator;

// Setting a Top level navigator from App.js
function setTopLevelNavigator(navigatorRef) {
 _navigator = navigatorRef;
}

// Navigate to a particular screen
//params -> (Name of screen, parameters)
function navigate(routeName, params) {
 _navigator.dispatch(
    CommonActions.navigate({
    name: routeName,
     params,
   })
 );
}
// add other navigation functions that you need and export them
export default {
  navigate,
  setTopLevelNavigator,
};