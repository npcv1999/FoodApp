import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IMAGES} from '../../utils';

const HeaderBackBtn = ({onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 8,
        height: 14,
        marginTop: 29,
      }}
      onPress={onPress}>
      <Image source={IMAGES.chevron_left} resizeMode="contain"></Image>
    </TouchableOpacity>
  );
};

export default HeaderBackBtn;

const styles = StyleSheet.create({});
