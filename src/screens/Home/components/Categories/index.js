import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import HeaderCpn from '../../../../components/Home/HeaderCpn';
import {
  COLORS,
  DATA,
  getSizeFromHeight,
  getSizeFromWidth,
  IMAGES,
} from '../../../../utils';

const renderItems = (item, index) => {
  return (
    <View
      style={[
        styles.viewItem,
        index > 0 ? {marginLeft: getSizeFromWidth(20)} : undefined,
      ]}>
      <TouchableOpacity
        style={styles.touchItem}
        onPress={() => console.log(item)}>
        <Image
          source={item.img}
          resizeMode="contain"
          style={[
            index === 0 ? {tintColor: COLORS.red_orange} : undefined,
            {width: 26, height: 26},
          ]}></Image>
      </TouchableOpacity>
      <Text style={styles.txtItem}>{item.name}</Text>
    </View>
  );
};

const CategoriesComponent = () => {
  return (
    <View>
      <HeaderCpn label="Categories"></HeaderCpn>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA.CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => renderItems(item, index)}></FlatList>
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  viewItem: {
    flex: 1,

    alignItems: 'center',
  },
  touchItem: {
    width: getSizeFromWidth(56),
    height: getSizeFromHeight(56),
    borderRadius: 8,
    backgroundColor: COLORS.light_gray1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtItem: {
    marginTop: getSizeFromHeight(16),
    fontSize: 15,
    fontWeight: '900',
  },
});
