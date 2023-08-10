import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Header from 'components/header/indes';
import globalStyles from 'utils/themes/global-styles';

export default function About() {
  return (
    <View style={globalStyles.outerContainer}>
      <Header title="About Us" />
    </View>
  );
}

const styles = StyleSheet.create({});
