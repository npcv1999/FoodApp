import {Dimensions} from 'react-native';

export const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} =
  Dimensions.get('window');

const DESIGN = {
  WIDTH: 375,
  HEIGHT: 812,
};

export const getSizeFromWidth = size => {
  return (DEVICE_WIDTH * size) / DESIGN.WIDTH;
};

export const getSizeFromHeight = size => {
  return (DEVICE_HEIGHT * size) / DESIGN.HEIGHT;
};

export const STYLES = {
  radius: getSizeFromHeight(8),
  mgt16: getSizeFromHeight(16),
  mgt24: getSizeFromHeight(24),
  font14: getSizeFromHeight(14),
  font15: getSizeFromHeight(15),
  font16: getSizeFromHeight(16),
  padHori16: getSizeFromWidth(16),
  padHori24: getSizeFromWidth(24),
  padVer14: getSizeFromHeight(14),
  height49: getSizeFromHeight(49),
  height46: getSizeFromHeight(46),
};
