import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {COLORS, DATA, IMAGES} from '../../utils';
import BottomLine from './components/BottomLine';
import MenuSection from './components/MenuSection';
import MoreInforRes from './components/MoreInforRestau';
import SpaceLine from './components/SpaceLine';
import {styles} from './styles';

export const onPressMenu = value => {
  console.log('value', value);
};

const Restaurant = ({onLike, onInfo}) => {
  const [enableStickyHeader, setEnableStickyHeader] = useState(true);
  const [foodSelected, setFoodSelected] = useState(false);

  // Navigation
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack();
  };

  const item = {id: 1, time: '5 min', range: '1.1 km', star: '5.0'};

  const menu = DATA.MENU;

  const handleScrollFlatList = e => {
    // console.log('scroll123', e);
    // console.log(listRef.current.getNode());
  };

  return (
    <View style={{flex: 1}}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnHeader} onPress={onBack}>
          <Image source={IMAGES.chevron_left} style={styles.iconHeader}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnHeader} onPress={onLike}>
          <Image source={IMAGES.heart} style={styles.iconHeader}></Image>
        </TouchableOpacity>
      </View>
      {/* Header Image */}
      <Image
        source={IMAGES.restaurant}
        style={{width: '100%', height: 242, zIndex: -1}}></Image>

      {/* View Restaurant */}
      <View style={styles.listItem}>
        {/* Touch to view info */}
        <TouchableOpacity style={styles.touchInfo} onPress={onInfo}>
          <Image source={IMAGES.alert} style={{width: 20, height: 20}}></Image>
        </TouchableOpacity>

        {/* Header Restaurant */}
        <View style={styles.headerList}>
          <Text style={{fontSize: 24}}>Pizzon - Crib Ln</Text>
          {/* Type food */}
          <View style={styles.tag}>
            <Text style={styles.tagName}>Fast Food</Text>

            <Text style={styles.tagName}>Western cuisine</Text>
          </View>
          {/* more infor */}
          <MoreInforRes item={item}></MoreInforRes>
          {/* Bottom Line */}
          <BottomLine></BottomLine>

          {/* Discount */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={IMAGES.discount}
              style={{
                tintColor: COLORS.red_orange,
                width: 14,
                height: 14,
              }}></Image>
            <Text style={{marginLeft: 6}}>Discount 40% pizza</Text>
          </View>
        </View>

        {/* Space line */}
        <SpaceLine></SpaceLine>

        <View style={{flex: 1}}>
          <FlatList
            data={menu}
            renderItem={({item}) => (
              <MenuSection data={item} onPressMenu={onPressMenu} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Restaurant;
