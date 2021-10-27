import {StyleSheet} from 'react-native';
import {
  COLORS,
  DEVICE_WIDTH,
  getSizeFromHeight,
  getSizeFromWidth,
} from '../../utils';

export const styles = StyleSheet.create({
  header: {
    width: DEVICE_WIDTH - 2 * getSizeFromWidth(24),
    top: getSizeFromHeight(22),
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: getSizeFromWidth(24),
  },
  btnHeader: {
    width: getSizeFromWidth(28),
    height: getSizeFromWidth(28),
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: getSizeFromWidth(14),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconHeader: {
    tintColor: COLORS.white,
  },

  headerList: {
    paddingHorizontal: getSizeFromWidth(24),
    paddingVertical: getSizeFromHeight(20),
  },
  listItem: {
    flex: 1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: 'white',
    marginTop: -24,
  },
  touchInfo: {
    position: 'absolute',
    right: 24,
    top: -14,
    padding: 6,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  tag: {
    flexDirection: 'row',
    marginTop: getSizeFromHeight(8),
  },
  tagName: {
    padding: getSizeFromWidth(8),
    marginRight: getSizeFromWidth(8),
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },
});
