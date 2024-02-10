import {ScrollView, StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';

import Header from 'components/header/indes';
import globalStyles from 'utils/themes/global-styles';
import fonts from 'src/utils/themes/fonts';
import img from 'assets/images/images';
import diseaseInfo from 'utils/constants/disease-info/disease-info.json';

import colors from 'src/utils/themes/global-colors';

export default function About() {
  return (
    <View style={globalStyles.outerContainer}>
      <Header title="About Us" />
      <ScrollView>
        <View style={[globalStyles.innerContainer]}>
          <View style={styles.topView}>
            <Image
              style={[styles.appIcon]}
              source={img.app_image}
              // onLoad={() => setImageLoading(false)}
            />
            <Text style={styles.heading}>Potato Wise</Text>
          </View>
          <Text style={styles.text}>{diseaseInfo['About Us'].description}</Text>
        </View>
      </ScrollView>
      <Text style={[styles.text, {textAlign: 'center', marginVertical: 10}]}>
        Version 0.0.1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topView: {
    paddingVertical: 20,
  },
  text: {
    fontFamily: fonts.RobotoLight,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 24,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  appIcon: {
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: 'center',
  },
  heading: {
    fontFamily: fonts.Regular,
    color: colors.black,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
