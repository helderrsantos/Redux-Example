import { registerRootComponent } from 'expo';
import React from 'react';
import {SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </Provider>
  );
}


registerRootComponent(App);