import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FeatherIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import globalStyles from 'utils/themes/global-styles';
import fonts from 'utils/themes/fonts';
import images from 'assets/images/images';
import Gallery from 'assets/svg/gallery';
import SCREENS from 'utils/constants';

import requestCameraAndGalleryPermissions from 'utils/services/permissions';

import Header from 'components/header/indes';
import ImageContainer from 'components/image-container';
import Button from 'components/button';
import colors from 'utils/themes/global-colors';

export default function Home() {
  const navigations = useNavigation();

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const hasPermissions = await requestCameraAndGalleryPermissions();
    if (hasPermissions) {
      launchImageLibrary({maxWidth: 800, maxHeight: 600}, response => {
        if (response.didCancel) {
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setSelectedImage(response.assets[0].uri);
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
          setSelectedImage(response.assets[0].type);
        }
      });
    }
  };

  return (
    <View style={globalStyles.outerContainer}>
      <Header title="Potato Wise" />
      <ScrollView>
        <View style={[globalStyles.innerContainer]}>
          <View>
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
                      uri: selectedImage,
                    }
              }
              // resizeMode="contain"
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
        <Button
          title="Analyze"
          onPress={() => {
            navigations.navigate(SCREENS.REPORT, {
              image: selectedImage,
            });
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%',
    borderRadius: 5,
  },
  imgClose: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.whiteColor,
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 10,
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
