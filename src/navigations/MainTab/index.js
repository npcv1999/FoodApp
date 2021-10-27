import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, IMAGES} from '../../utils';
import Home from '../../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const ROUTE = {
  HOME: 'Home',
  ORDER: 'Order',
  WISHLIST: 'WhistList',
  PROFILE: 'Profile',
};
const tabOptions = {
  headerShown: false,
  tabBarStyle: {
    shadowColor: '#000',
    shadowOffset: {
      with: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
};

const tabBar = (focused, route) => {
  const tintColor = focused ? COLORS.red_orange : COLORS.gray;

  switch (route.name) {
    case ROUTE.HOME:
      return (
        <Image
          source={IMAGES.home}
          resizeMode="contain"
          style={{tintColor: tintColor, width: 25, height: 25}}></Image>
      );
    case ROUTE.ORDER:
      return (
        <Image
          source={IMAGES.gift}
          resizeMode="contain"
          style={{tintColor, width: 25, height: 25}}></Image>
      );
    //   case 'Camera':
    //     return <CameraBtn tintColor></CameraBtn>;
    case ROUTE.WISHLIST:
      return (
        <Image
          source={IMAGES.heart}
          resizeMode="contain"
          style={{tintColor, width: 25, height: 25}}></Image>
      );
    case ROUTE.PROFILE:
      return (
        <Image
          source={IMAGES.user}
          resizeMode="contain"
          style={{tintColor, width: 25, height: 25}}></Image>
      );
  }
};

const MainTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //   tabBarOptions={tabOptions}
        screenOptions={({route}) => ({
          ...tabOptions,
          tabBarIcon: ({focused}) => tabBar(focused, route),
        })}>
        <Tab.Screen name={ROUTE.HOME} component={Home}></Tab.Screen>
        <Tab.Screen name={ROUTE.ORDER} component={Home}></Tab.Screen>
        <Tab.Screen name={ROUTE.WISHLIST} component={Home}></Tab.Screen>
        <Tab.Screen name={ROUTE.PROFILE} component={Home}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;
