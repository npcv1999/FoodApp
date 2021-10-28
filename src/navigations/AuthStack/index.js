import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import {ROUTES} from '../Routes';

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackOptions}>
        <Stack.Screen name={ROUTES.SIGNIN} component={SignIn}></Stack.Screen>
        <Stack.Screen name={ROUTES.SIGNUP} component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
