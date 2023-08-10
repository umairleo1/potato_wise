import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';

import globalStyles from 'utils/themes/global-styles';
import fonts from 'utils/themes/fonts';
import Gallery from 'assets/svg/gallery';

import requestCameraAndGalleryPermissions from 'utils/services/permissions';

import Header from 'components/header/indes';
import ImageContainer from 'components/image-container';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const hasPermissions = await requestCameraAndGalleryPermissions();
    if (hasPermissions) {
      launchImageLibrary({maxWidth: 800, maxHeight: 600}, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setSelectedImage({uri: response.uri});
        }
      });
    }
  };

  const takeImage = async () => {
    const hasPermissions = await requestCameraAndGalleryPermissions();

    if (hasPermissions) {
      await launchCamera({maxWidth: 800, maxHeight: 600}, response => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.error) {
          console.log('Camera Error: ', response.error);
        } else {
          setSelectedImage({uri: response.uri});
        }
      });
    }
  };

  return (
    <View style={globalStyles.outerContainer}>
      <Header title="Potato Wise" />
      <ScrollView>
        <View style={[globalStyles.innerContainer, {alignItems: 'center'}]}>
          <ImageContainer onPress={() => pickImage()}>
            <Gallery height={100} width={100} />
          </ImageContainer>
          <ImageContainer onPress={() => takeImage()}>
            <FeatherIcon name="camera" size={100} color="#BBB" />
          </ImageContainer>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
