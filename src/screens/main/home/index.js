import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SCREENS from 'utils/constants';
import globalStyles from 'utils/themes/global-styles';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text>{SCREENS.HOME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
