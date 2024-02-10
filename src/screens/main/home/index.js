import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import globalStyles from 'utils/themes/global-styles';
import images from 'assets/images/images';
import Gallery from 'assets/svg/gallery';
import SCREENS from 'utils/constants';
import styles from './styles';

import ActivityIndicatorComponent from 'components/loader/activity-indicator';
import ImageContainer from 'components/image-container';
import Header from 'components/header/indes';
import Button from 'components/button';

import {predictService} from 'utils/services/prediction-service';
import requestCameraAndGalleryPermissions from 'utils/services/permissions';

export default function Home() {
  const navigations = useNavigation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setVisiable] = useState(false);

  const pickImage = async () => {
    const hasPermissions = await requestCameraAndGalleryPermissions();
    if (hasPermissions) {
      launchImageLibrary({maxWidth: 800, maxHeight: 600}, response => {
        if (response.didCancel) {
          console.log('User cancelled gallery');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setSelectedImage(response);
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
          setSelectedImage(response);
        }
      });
    }
  };

  const handleAnalyze = async () => {
    try {
      setVisiable(true);
      const formData = new FormData();
      formData.append('file', {
        uri: selectedImage.assets[0].uri,
        name: selectedImage.assets[0].fileName,
        type: selectedImage.assets[0].type,
      });

      const result = await predictService.getPrediction(formData);
      console.log({result});

      result?.class !== 'Others'
        ? navigations.navigate(SCREENS.REPORT, {
            image: selectedImage.assets[0].uri,
            result: result,
          })
        : navigations.navigate(SCREENS.NOT_FOUND);
      setVisiable(false);
    } catch (error) {
      console.log(error);
      setVisiable(false);
    }
  };

  return (
    <>
      <ActivityIndicatorComponent visible={visible} />
      <View style={globalStyles.outerContainer}>
        <Header title="Potato Wise" />
        <ScrollView>
          <View style={[globalStyles.innerContainer]}>
            <View style={styles.shadow}>
              {selectedImage && (
                <TouchableOpacity
                  onPress={() => setSelectedImage(null)}
                  style={styles.imgClose}>
                  <AntDesignIcon name="close" size={16} />
                </TouchableOpacity>
              )}
              <Image
                style={styles.image}
                source={
                  !selectedImage
                    ? images.no_image
                    : {
                        uri: selectedImage.assets[0].uri,
                      }
                }
                // resizeMode="cover"
              />
            </View>
            <View style={styles.buttonsView}>
              <ImageContainer onPress={() => pickImage()}>
                <Gallery height={50} width={50} />
              </ImageContainer>
              <ImageContainer onPress={() => takeImage()}>
                <FeatherIcon name="camera" size={50} color="#BBB" />
              </ImageContainer>
            </View>
          </View>
        </ScrollView>
        {selectedImage && (
          <Button title="Analyze" onPress={() => handleAnalyze()} />
        )}
      </View>
    </>
  );
}
