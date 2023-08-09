import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SCREENS from 'utils/constants';

export default function index() {
  return (
    <View>
      <Text>{SCREENS.HOME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
