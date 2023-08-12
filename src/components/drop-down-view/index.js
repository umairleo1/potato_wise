import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import styles from './styles';

export default function DropDownView({
  leftIcon,
  title,
  description,
  isOpen,
  onToggle,
  img,
}) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <>
      <TouchableOpacity onPress={onToggle} style={styles.container}>
        <View style={styles.leftView}>{leftIcon}</View>
        <View style={styles.centerView}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.rightView}>
          <AntDesignIcon name={isOpen ? 'up' : 'down'} size={16} color="#BBB" />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropDownView}>
          {img && (
            <View style={styles.imgView}>
              {imageLoading && <ActivityIndicator style={styles.loader} />}
              <Image
                style={[styles.image]}
                source={img}
                onLoad={() => setImageLoading(false)}
              />
            </View>
          )}
          <Text style={[styles.text]}>{description}</Text>
        </View>
      )}
    </>
  );
}
