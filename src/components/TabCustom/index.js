import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, getSizeFromHeight, getSizeFromWidth, IMAGES} from '../../utils';

const TabIcon = {
  Home: IMAGES.home,
  Order: IMAGES.order,
  Saved: IMAGES.heart,
  Profile: IMAGES.user,
};

const onPress = (isFocused, target, navigation) => {
  if (!isFocused) {
    navigation.navigate(target);
  }
};

const TabCustom = props => {
  //   console.log('tab bar', props);
  const {state, navigation} = props;
  console.log('route', state.index);
  return (
    <View style={styles.container}>
      {state.routes.map((e, index) => {
        const isFocused = state.index === index;
        return (
          <TouchableOpacity
            style={isFocused ? styles.itemContainerFocus : styles.itemContainer}
            onPress={() => onPress(isFocused, e.name, navigation)}>
            <View style={isFocused && styles.viewItemFocus}>
              <Image
                source={TabIcon[e.name]}
                style={[styles.iconImg, isFocused && styles.imgFocus]}></Image>
              {isFocused && <Text style={styles.txtItem}>{e.name}</Text>}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabCustom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.light_gray,
    borderWidth: 0.5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemContainerFocus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
  },
  viewItemFocus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.tabBarIcon,
    marginHorizontal: getSizeFromWidth(24),
    borderRadius: 40,
    paddingHorizontal: getSizeFromWidth(12),
    paddingVertical: getSizeFromWidth(6),
    marginVertical: getSizeFromHeight(16),
  },
  txtItem: {
    fontSize: 14,
    color: COLORS.red_orange,
    marginLeft: getSizeFromWidth(8),
  },
  iconImg: {width: getSizeFromWidth(24), height: getSizeFromHeight(24)},
  imgFocus: {
    tintColor: COLORS.red_orange,
  },
});
