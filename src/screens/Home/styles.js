import {ColorPropType, StyleSheet} from 'react-native';
import {COLORS, getSizeFromHeight, getSizeFromWidth, STYLES} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: STYLES.padHori24,
    paddingTop: STYLES.padHori32,
    paddingBottom: STYLES.padHori24,
  },
  headerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  nameUser: {fontSize: STYLES.font27, fontWeight: '900'},
  txtLocation: {
    fontSize: STYLES.font15,
    marginTop: getSizeFromHeight(16),
  },
  arrowDown: {
    tintColor: COLORS.red_orange,
    width: 9,
    height: 6,
  },
  avtUser: {width: 40, height: 40, borderRadius: 6},
  searchBar: {
    backgroundColor: COLORS.bg_search,
    borderRadius: STYLES.radius,
    borderWidth: 1,
    borderColor: COLORS.border_search,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getSizeFromWidth(12),
    marginTop: STYLES.mgt24,
    height: 40,
  },
  txtSearch: {
    fontSize: getSizeFromHeight(15),
    marginLeft: getSizeFromWidth(16),
  },
});
