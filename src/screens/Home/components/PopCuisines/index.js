import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import HeaderCpn from '../../../../components/Home/HeaderCpn';
import {DATA, getSizeFromHeight, getSizeFromWidth} from '../../../../utils';

const onGetItem = item => {
  console.log('item cuisines', item);
};

const renderItem = (item, index) => {
  return (
    <View
      style={[
        styles.itemContainer,
        index > 0 ? {marginLeft: getSizeFromWidth(16)} : undefined,
      ]}>
      <TouchableOpacity style={styles.viewItem} onPress={() => onGetItem(item)}>
        <Image source={item.img} resizeMode="contain"></Image>
      </TouchableOpacity>
      <Text style={styles.txtItem}>{item.name}</Text>
    </View>
  );
};

const PopCuisinesCpn = () => {
  return (
    <View>
      <HeaderCpn label="Popular Cuisines" viewAll></HeaderCpn>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA.CUISINES}
        renderItem={({item, index}) => renderItem(item, index)}></FlatList>
    </View>
  );
};

export default PopCuisinesCpn;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewItem: {
    width: getSizeFromWidth(113),
    height: getSizeFromHeight(70),
    borderRadius: 16,
  },
  txtItem: {
    fontSize: 14,
    marginTop: getSizeFromHeight(8),
  },
});
