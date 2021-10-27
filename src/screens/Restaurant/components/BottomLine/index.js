import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, getSizeFromHeight} from '../../../../utils';

const BottomLine = () => {
  return <View style={styles.borderBottom}></View>;
};

export default BottomLine;

const styles = StyleSheet.create({
  borderBottom: {
    marginVertical: getSizeFromHeight(16),
    borderBottomColor: COLORS.light_gray,
    borderBottomWidth: 1,
  },
});
