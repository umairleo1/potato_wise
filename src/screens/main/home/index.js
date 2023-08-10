import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import SCREENS from 'utils/constants';
import globalStyles from 'utils/themes/global-styles';
import fonts from 'utils/themes/fonts';

import Header from 'components/header/indes';

export default function Home() {
  return (
    <View style={globalStyles.outerContainer}>
      <Header title="Potato Wise" />
      <View style={globalStyles.innerContainer}>
        <Text style={{fontFamily: fonts.RobotoMediumItalic}}>
          {SCREENS.HOME}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
