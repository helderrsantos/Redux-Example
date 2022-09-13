import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {Details} from '../screens/Details';

const {Navigator, Screen} = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Splash">
        <Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;