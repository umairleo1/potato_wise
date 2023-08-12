import {StyleSheet} from 'react-native';

import colors from 'utils/themes/global-colors';
import fonts from 'utils/themes/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    backgroundColor: colors.whiteColor,
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  leftView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    width: '60%',
    justifyContent: 'center',
  },
  rightView: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.Regular,
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 18,
  },
  dropDownView: {
    backgroundColor: colors.whiteColor,
    borderRadius: 5,
    padding: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 10,
  },
  imgView: {alignItems: 'center', justifyContent: 'center'},
  loader: {
    position: 'absolute',
    // alignSelf: 'center',
    zIndex: 1,
  },
});
export default styles;
