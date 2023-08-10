import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SCREENS from 'utils/constants';
import globalStyles from 'utils/themes/global-styles';
import fonts from 'utils/themes/fonts';

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={{fontFamily: fonts.RobotoMediumItalic}}>{SCREENS.HOME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
