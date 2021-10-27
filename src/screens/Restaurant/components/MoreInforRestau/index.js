import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getSizeFromWidth, IMAGES} from '../../../../utils';

const MoreInforRes = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtSize12}>
        <Image
          source={IMAGES.time}
          resizeMode="contain"
          style={{width: 12, height: 12, marginRight: 6}}></Image>{' '}
        {item.time}
      </Text>
      <Text style={[styles.txtSize12, {marginLeft: 15}]}>
        <Image
          source={IMAGES.dot}
          style={{width: 4, height: 4, marginRight: 8}}></Image>
        {'  '}
        {item.range}
      </Text>
      <Text style={[styles.txtSize12, {marginLeft: 26}]}>
        <Image
          source={IMAGES.star}
          style={{width: 14, height: 14}}
          resizeMode="contain"></Image>{' '}
        {item.star}
      </Text>
      <Text style={[styles.txtSize12, {marginLeft: 12}]}> (200+ rated)</Text>
    </View>
  );
};

export default MoreInforRes;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: getSizeFromWidth(16),
  },
  txtSize12: {
    fontSize: 12,
  },
});
