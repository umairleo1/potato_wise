import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

import {useRoute} from '@react-navigation/native';

import globalStyles from 'utils/themes/global-styles';
import Header from 'components/header/indes';
import fonts from 'utils/themes/fonts';
import images from 'assets/images/images';

import diseaseInfo from 'utils/constants/disease-info/disease-info.json';
import DropDownView from 'components/drop-down-view';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

export default function Report() {
  const route = useRoute();
  const scrollViewRef = useRef(null);

  const [prediction, setPrediction] = useState(route?.params?.result);
  const [openIndex, setOpenIndex] = useState(null);

  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (openIndex !== null && scrollViewRef.current && contentHeight > 0) {
      scrollViewRef.current.scrollTo({y: contentHeight, animated: true});
    }
  }, [openIndex, contentHeight]);

  const handleContentLayout = event => {
    setContentHeight(event.nativeEvent.layout.height);
  };

  const handleDropDownToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View style={globalStyles.outerContainer}>
      <Header title="Report" back />
      <ScrollView
        ref={scrollViewRef}
        style={{flex: 1}}
        contentContainerStyle={styles.contentContainer}>
        <View
          onLayout={handleContentLayout}
          style={[globalStyles.innerContainer]}>
          <Image
            style={styles.image}
            source={{
              uri: route?.params?.image,
            }}
            // resizeMode="contain"
          />
          <Text style={[styles.text, {marginVertical: 10}]}>
            <Text>We're</Text>
            <Text style={{fontFamily: fonts.Bold}}>
              {' '}
              {prediction?.confidence}%{' '}
            </Text>
            <Text>confident that it is:</Text>
          </Text>
          <Text style={[styles.heading, {marginVertical: 20}]}>
            {prediction?.class}
          </Text>
          <Text style={styles.text}>
            {diseaseInfo[prediction?.class]?.description}
          </Text>
          <Text style={[styles.heading, {marginVertical: 20}]}>
            Treatment Options
          </Text>
          <DropDownView
            title="Organic Treatment"
            leftIcon={<EntypoIcon name="leaf" size={18} color="#BBB" />}
            description={
              diseaseInfo[prediction?.class]?.treatments['Organic Treatment']
            }
            isOpen={openIndex === 0}
            onToggle={() => handleDropDownToggle(0)}
            img={images.organic_treatment}
          />
          <DropDownView
            title="Conventional Treatment"
            leftIcon={
              <FontAwesome6Icon name="spray-can" size={18} color="#BBB" />
            }
            description={
              diseaseInfo[prediction?.class]?.treatments[
                'Conventional Treatment'
              ]
            }
            isOpen={openIndex === 1}
            onToggle={() => handleDropDownToggle(1)}
            img={images.conventional_treatment}
          />
          <DropDownView
            title="Biological Treatment"
            leftIcon={
              <FontAwesome6Icon name="biohazard" size={18} color="#BBB" />
            }
            description={
              diseaseInfo[prediction?.class]?.treatments['Biological Treatment']
            }
            isOpen={openIndex === 2}
            onToggle={() => handleDropDownToggle(2)}
            img={images.biological_treatment}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    borderRadius: 5,
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 18,
  },
  heading: {
    fontFamily: fonts.Bold,
    fontSize: 18,
  },
});
