import React from 'react';

import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AuthStack from './navigations/AuthStack';
import MainTab from './navigations/MainTab';
import Home from './screens/Home';
import Restaurant from './screens/Restaurant';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const App = () => {
  return (
    <SafeAreaProvider>
      <AuthStack></AuthStack>
    </SafeAreaProvider>
  );
};

export default App;
