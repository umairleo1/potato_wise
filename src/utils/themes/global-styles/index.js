import {StyleSheet} from 'react-native';
import colors from '../global-colors';

export default globalStyles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  innerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
  },
});
