import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getSizeFromHeight} from '../../utils';

const Title = ({label}) => {
  return <Text style={styles.label}>{label}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  label: {
    fontSize: 40,
    marginTop: getSizeFromHeight(56),
    fontWeight: 'bold',
  },
});
