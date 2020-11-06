
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './app/Navigator';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './app/Redux/Reducer';


const store = createStore(appReducer,applyMiddleware(thunk));

function App(){

  return (
     <SafeAreaView style={styles.container} >
        <Provider store={store}>
              <AppNavigator />
        </Provider>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex:1
  },
});

export default App;


