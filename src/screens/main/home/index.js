import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';

import globalStyles from 'utils/themes/global-styles';
import fonts from 'utils/themes/fonts';
import Gallery from 'assets/svg/gallery';

import Header from 'components/header/indes';
import ImageContainer from 'components/image-container';

export default function Home() {
  return (
    <View style={globalStyles.outerContainer}>
      <Header title="Potato Wise" />
      <ScrollView>
        <View style={[globalStyles.innerContainer, {alignItems: 'center'}]}>
          <ImageContainer onPress={() => console.log('gallery')}>
            <Gallery height={100} width={100} />
          </ImageContainer>
          <ImageContainer onPress={() => console.log('camera')}>
            <FeatherIcon name="camera" size={100} color="#BBB" />
          </ImageContainer>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
