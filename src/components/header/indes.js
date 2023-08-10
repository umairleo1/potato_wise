import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import colors from 'utils/themes/global-colors';
import fonts from 'utils/themes/fonts';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },

  headerText: {
    fontFamily: fonts.RobotoMedium,
    fontSize: 16,
    color: colors.black,
  },
});
