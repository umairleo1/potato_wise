import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import globalStyles from 'utils/themes/global-styles';

import images from 'assets/images/images';
import Header from 'components/header/indes';
import DropDownView from 'components/drop-down-view';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function Diseases() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropDownToggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <View style={globalStyles.outerContainer}>
      <Header title="Potato Diseases" />
      <ScrollView>
        <View style={[globalStyles.innerContainer]}>
          <DropDownView
            title="Healthy"
            leftIcon={<FontAwesome5Icon name="leaf" size={18} color="#BBB" />}
            description={
              "diseaseInfo[prediction]?.treatments['Organic Treatment']"
            }
            isOpen={openIndex === 0}
            onToggle={() => handleDropDownToggle(0)}
            img={images.healthy_potato}
          />
          <DropDownView
            title="Early Blight"
            leftIcon={
              <FontAwesome5Icon name="disease" size={18} color="#BBB" />
            }
            description={
              "diseaseInfo[prediction]?.treatments['Organic Treatment']"
            }
            isOpen={openIndex === 1}
            onToggle={() => handleDropDownToggle(1)}
            img={images.Early_Blight}
          />
          <DropDownView
            title="Late Blight"
            leftIcon={
              <FontAwesome5Icon name="disease" size={18} color="#BBB" />
            }
            description={
              "diseaseInfo[prediction]?.treatments['Organic Treatment']"
            }
            isOpen={openIndex === 2}
            onToggle={() => handleDropDownToggle(2)}
            img={images.Late_Blight}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
