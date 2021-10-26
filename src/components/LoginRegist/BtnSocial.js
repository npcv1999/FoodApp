import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, getSizeFromHeight, IMAGES, STYLES} from '../../utils';

const BtnSocial = ({onPress, label, marginTop = 24, fb = true}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          marginTop: getSizeFromHeight(marginTop),
          backgroundColor: fb ? COLORS.dark_blue : COLORS.light_blue,
        },
      ]}>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        }}>
        <Image
          resizeMode="contain"
          source={fb ? IMAGES.facebook : IMAGES.google}></Image>
      </View>
      <Text style={styles.label}>CONTINUE WITH {label}</Text>
    </TouchableOpacity>
  );
};

export default BtnSocial;

const styles = StyleSheet.create({
  container: {
    borderRadius: STYLES.radius,
    alignItems: 'center',
    paddingVertical: STYLES.padVer14,
    flexDirection: 'row',
    padding: 8,
    height: STYLES.height46,
  },
  label: {
    fontWeight: '900',
    color: COLORS.white,
    fontSize: STYLES.font16,
    textAlign: 'center',
    flex: 1,
  },
});
