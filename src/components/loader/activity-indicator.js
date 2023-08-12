/* eslint-disable react/prop-types */
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

export default function ActivityIndicatorComponent({
  visible = false,
  fontSize,
}) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.overLay}>
      {/* <BarIndicator
        color={colors.buttonColor}
        size={fontSize ? fontSize : 40}
      /> */}
      <ActivityIndicator size="large" color="#3D3D3D" />
    </View>
  );
}
