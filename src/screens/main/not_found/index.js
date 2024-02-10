import {Text, View} from 'react-native';
import React from 'react';
import globalStyles from 'src/utils/themes/global-styles';
import Header from 'src/components/header/indes';
import fonts from 'src/utils/themes/fonts';
import NotFoundSvg from 'src/assets/svg/common/not-found';
import colors from 'src/utils/themes/global-colors';

export default function NotFound() {
  return (
    <View style={[globalStyles.outerContainer]}>
      <Header title="Not Recognized" back />
      <View style={[globalStyles.innerContainer, {alignItems: 'center'}]}>
        <NotFoundSvg height={300} width={'100%'} />
        <Text style={{fontFamily: fonts.Regular, marginTop: 40, fontSize: 16}}>
          Please provide clear picture of plant's leaf
        </Text>
        <Text
          style={{
            fontFamily: fonts.RobotoLight,
            color: colors.grey,
            marginTop: 10,
          }}>
          Provided image is not recognized as leaf.
        </Text>
      </View>
    </View>
  );
}
