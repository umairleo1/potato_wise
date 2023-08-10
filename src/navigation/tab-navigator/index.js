import {StyleSheet, Text} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeIcon, AddIcon} from 'assets/svg/bottom-tab';

import SCREENS from 'utils/constants';
import Home from 'screens/main/home';
import About from 'screens/main/about';
import colors from 'utils/themes/global-colors';
import fonts from 'utils/themes/fonts';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
    </Stack.Navigator>
  );
};

const AboutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SCREENS.ABOUT} component={About} />
    </Stack.Navigator>
  );
};

export default function BottomTab() {
  const CustomTabBarLabel = ({label, focused}) => {
    const textStyle = {
      color: focused ? colors.buttonColor : '#BBBBBB',
      fontSize: focused ? 13 : 12,
      fontFamily: focused ? fonts.RobotoMedium : fonts.RobotoRegular,
    };

    return <Text style={textStyle}>{label}</Text>;
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: false,
        tabBarActiveTintColor: colors.buttonColor,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabBarLabel label="Home" focused={focused} />
          ),
          tabBarIcon: ({focused}) => (
            <HomeIcon color={focused ? colors.buttonColor : '#BBBBBB'} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutStack}
        options={{
          tabBarLabel: ({focused}) => (
            <CustomTabBarLabel label="About" focused={focused} />
          ),
          tabBarIcon: ({color, size, focused}) => (
            <AddIcon color={focused ? colors.buttonColor : '#BBBBBB'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
