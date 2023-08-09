import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import {HomeIcon, ProfileIcon} from 'assets/svg/bottom-tab';

import SCREENS from 'utils/constants';
import Home from 'screens/main/home';
import colors from 'src/utils/themes/global-colors';

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

export default function BottomTab() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      screenOptions={{
        headerShown: false,
        unmountOnBlur: false,
        tabBarActiveTintColor: colors.buttonColor,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <HomeIcon color={focused ? colors.buttonColor : '#BBBBBB'} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={HomeStack}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size, focused}) => (
            <ProfileIcon color={focused ? colors.buttonColor : '#BBBBBB'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
