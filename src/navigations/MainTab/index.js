import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, IMAGES} from '../../utils';
import Home from '../../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import TabCustom from '../../components/TabCustom';
import HomeStack from '../HomeStack';
import {ROUTES} from '../Routes';

const Tab = createBottomTabNavigator();
const tabOptions = {
  tabBarShowLabel: false,
  headerShown: false,
};
const MainTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <TabCustom {...props}></TabCustom>}
        screenOptions={tabOptions}>
        <Tab.Screen name={ROUTES.HOME} component={HomeStack}></Tab.Screen>
        <Tab.Screen name={ROUTES.ORDER} component={Home}></Tab.Screen>
        <Tab.Screen name={ROUTES.SAVE} component={Home}></Tab.Screen>
        <Tab.Screen name={ROUTES.PROFILE} component={Home}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  tabBarItem: {
    paddingVertical: 8,
    paddingLeft: 16,
    paddingRight: 9,
    borderRadius: 40,
    backgroundColor: COLORS.tabBarIcon,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
