import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, getSizeFromHeight} from '../../../utils';

const SpaceLine = () => {
  return <View style={styles.line}></View>;
};

export default SpaceLine;

const styles = StyleSheet.create({
  line: {
    height: getSizeFromHeight(5),
    backgroundColor: COLORS.line,
  },
});
