import React from 'react';

import {Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const App = () => {
  return (
    <SafeAreaProvider>
      <Home></Home>
    </SafeAreaProvider>
  );
};

export default App;
