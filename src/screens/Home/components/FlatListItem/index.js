import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getSizeFromHeight, getSizeFromWidth, IMAGES} from '../../../../utils';

const renderItem = (item, index, onPress) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[styles.itemContainer, index != 0 && {marginLeft: 16}]}>
      <View style={{flex: 1}}>
        <Image
          source={item.image}
          style={{height: getSizeFromHeight(104)}}></Image>
      </View>

      <View
        style={{
          height: 84,
          paddingTop: getSizeFromHeight(12),
          paddingHorizontal: getSizeFromWidth(12),
        }}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemLocation}>{item.text}</Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 5,
            alignItems: 'center',
          }}>
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

const FlatListItem = ({data, onPress}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item, index}) =>
        renderItem(item, index, onPress)
      }></FlatList>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  itemContainer: {
    elevation: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#000',
    height: getSizeFromHeight(188),
    marginBottom: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '900',
  },
  itemLocation: {
    fontSize: 12,
    marginTop: getSizeFromHeight(8),
  },
  txtSize12: {
    fontSize: 12,
  },
});
