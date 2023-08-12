import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import fonts from 'utils/themes/fonts';
import colors from 'utils/themes/global-colors';

export default function Button({title, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '70%',
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: colors.whiteColor,
  },
  text: {
    fontFamily: fonts.Medium,
    fontSize: 14,
  },
});
