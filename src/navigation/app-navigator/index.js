import {StyleSheet} from 'react-native';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SCREENS from 'utils/constants';
import BottomTab from '../tab-navigator';

const Stack = createStackNavigator();
const {BOTTOM_TAB} = SCREENS;

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={BOTTOM_TAB} component={BottomTab} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
