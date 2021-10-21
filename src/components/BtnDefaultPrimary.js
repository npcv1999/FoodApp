import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, getSizeFromHeight, STYLES} from '../utils';

const BtnDefaultPrimary = ({label, marginTop = 24, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {marginTop: getSizeFromHeight(marginTop)}]}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BtnDefaultPrimary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.red_orange,
    borderRadius: STYLES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: STYLES.padVer14,
  },
  label: {
    color: COLORS.white,
    fontSize: STYLES.font16,
    fontWeight: '900',
  },
});
