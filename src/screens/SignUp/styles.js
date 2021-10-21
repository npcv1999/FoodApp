import {StyleSheet} from 'react-native';
import {COLORS, STYLES} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: STYLES.padHori24,
  },
  txtForgot: {
    textAlign: 'center',
    marginTop: STYLES.mgt16,
    fontSize: STYLES.font15,
  },
});
