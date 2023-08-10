import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

import colors from 'utils/themes/global-colors';

export default function ImageContainer({children, onPress}) {
  return (
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    height: 200,
    marginTop: 20,
    width: 200,
    backgroundColor: colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
