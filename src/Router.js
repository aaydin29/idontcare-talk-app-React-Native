import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';

import Login from './Pages/Login/Login';
import Sign from './Pages/Sign/Sign';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Log in" component={Login} />
      <Stack.Screen name="Sign up" component={Sign} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth Stack" component={AuthStack} />
        {/* <Stack.Screen name="Sign up" component={Sign} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
