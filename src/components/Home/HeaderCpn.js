import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, getSizeFromHeight, STYLES} from '../../utils';

const HeaderCpn = ({label, onPress, viewAll}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtLabel}>{label}</Text>
      {viewAll && (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.txtViewAll}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderCpn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getSizeFromHeight(32),
    marginBottom: getSizeFromHeight(16),
  },
  txtLabel: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.txtLabel,
  },
  txtViewAll: {
    color: COLORS.red_orange,
    fontSize: 12,
  },
});
