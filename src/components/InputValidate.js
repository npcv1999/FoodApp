import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, IMAGES, STYLES} from '../utils';

const InputValidate = ({
  placeholder,
  value,
  onChangeText,
  isCorrect,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        isCorrect
          ? {borderColor: COLORS.light_green}
          : isCorrect == ''
          ? {borderColor: COLORS.light_red}
          : {borderColor: COLORS.light_gray},
      ]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}></TextInput>
      {isCorrect ? (
        <Image
          style={{
            position: 'absolute',
            right: 15,
            tintColor: COLORS.light_green,
          }}
          source={IMAGES.check}></Image>
      ) : isCorrect == '' ? (
        <Image
          style={{
            position: 'absolute',
            right: 15,
            tintColor: COLORS.light_red,
          }}
          source={IMAGES.x}></Image>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default InputValidate;

const styles = StyleSheet.create({
  container: {
    marginTop: STYLES.mgt16,
    borderWidth: 1,
    borderRadius: STYLES.radius,
    paddingHorizontal: STYLES.padHori16,
    flexDirection: 'row',
    alignItems: 'center',
    height: STYLES.height49,
  },
});
