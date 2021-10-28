import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Restaurant from '../../screens/Restaurant';

const Stack = createNativeStackNavigator();

const stackOptions = {
  headerShown: false,
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
    </Stack.Navigator>
  );
};

export default HomeStack;
