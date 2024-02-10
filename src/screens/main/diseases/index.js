import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import globalStyles from 'utils/themes/global-styles';

import images from 'assets/images/images';
import Header from 'components/header/indes';
import DropDownView from 'components/drop-down-view';
import diseaseInfo from 'utils/constants/disease-info/disease-info.json';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import fonts from 'src/utils/themes/fonts';

export default function Diseases() {
  const scrollViewRef = useRef(null);

  const [openIndex, setOpenIndex] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);

  const handleDropDownToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex !== null && scrollViewRef.current && contentHeight > 0) {
      scrollViewRef.current.scrollTo({y: contentHeight, animated: true});
    }
  }, [openIndex, contentHeight]);

  const handleContentLayout = event => {
    setContentHeight(event.nativeEvent.layout.height);
  };

  return (
    <View style={globalStyles.outerContainer}>
      <Header title="Potato Diseases" />
      <ScrollView ref={scrollViewRef} style={{flex: 1, marginTop: 5}}>
        <View
          onLayout={handleContentLayout}
          style={[globalStyles.innerContainer]}>
          <Image
            source={images.awairness}
            style={{height: 200, width: '100%'}}
            resizeMode="contain"
          />
          <Text style={styles.text}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>PotatoWise: </Text>
            <Text>{diseaseInfo['Disease Info'].description}</Text>
          </Text>
          <DropDownView
            title="Healthy"
            leftIcon={<FontAwesome5Icon name="leaf" size={18} color="#BBB" />}
            description={diseaseInfo['Healthy']?.description}
            isOpen={openIndex === 0}
            onToggle={() => handleDropDownToggle(0)}
            img={images.healthy_potato}
          />
          <DropDownView
            title="Early Blight"
            leftIcon={
              <FontAwesome5Icon name="disease" size={18} color="#BBB" />
            }
            description={diseaseInfo['Early Blight']?.description}
            isOpen={openIndex === 1}
            onToggle={() => handleDropDownToggle(1)}
            img={images.Early_Blight}
          />
          <DropDownView
            title="Late Blight"
            leftIcon={
              <FontAwesome5Icon name="disease" size={18} color="#BBB" />
            }
            description={diseaseInfo['Late Blight']?.description}
            isOpen={openIndex === 2}
            onToggle={() => handleDropDownToggle(2)}
            img={images.Late_Blight}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.RobotoLight,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 10,
  },
});
