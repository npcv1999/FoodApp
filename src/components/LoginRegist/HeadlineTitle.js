import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, getSizeFromHeight, getSizeFromWidth} from '../../utils';

const HeadlineTitle = ({label, pressLabel, onPress, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.pressLabel}>{pressLabel}</Text>
      </TouchableOpacity>
      {children}
    </View>
  );
};

export default HeadlineTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: getSizeFromHeight(16),
  },
  label: {
    fontSize: 15,
  },
  pressLabel: {
    color: COLORS.red_orange,
    fontSize: 15,
  },
});
