import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import colors from 'utils/themes/global-colors';
import fonts from 'utils/themes/fonts';

export default function Header({title, back}) {
  const navigations = useNavigation();
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      {back && (
        <TouchableOpacity
          onPress={navigations.goBack()}
          style={styles.backIcon}>
          <AntDesignIcon name="arrowleft" size={20} />
        </TouchableOpacity>
      )}
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
    fontFamily: fonts.RobotoBold,
    fontSize: 20,
    color: colors.black,
  },

  backIcon: {
    position: 'absolute',
    left: 0,
    padding: 10,
  },
});
