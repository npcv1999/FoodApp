import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  COLORS,
  getSizeFromHeight,
  getSizeFromWidth,
  IMAGES,
} from '../../../utils';

const MenuItem = ({data, isLast = false, onPressMenu}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onPressMenu(data)}>
        <View
          style={isLast ? styles.itemWithoutBorderBottom : styles.borderBottom}>
          <Image source={IMAGES.restaurant} style={styles.image} />
          <View>
            <View style={styles.itemRowTitle}>
              <Text style={styles.itemTitle}>{data.title}</Text>
              <Text>KCal: {data.kcal}</Text>
            </View>
            <View style={styles.itemText}>
              <Text style={{color: COLORS.light_gray}}>{data.detail}</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={styles.textOrange}>{`${data.price}`}</Text>
              <Text style={styles.textStrike}>{`${data.oldPrice}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const MenuSection = ({data, onPressMenu}) => {
  return (
    <View>
      <Text style={styles.bigTitle}>{data.title}</Text>
      {data.items.map((item, index) => {
        return (
          <MenuItem
            data={item}
            key={index}
            isLast={index === data.items.length - 1}
            onPressMenu={onPressMenu}
          />
        );
      })}
    </View>
  );
};

export default MenuSection;

const styles = StyleSheet.create({
  bigTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: getSizeFromWidth(24),
  },
  item: {
    paddingHorizontal: getSizeFromWidth(24),
  },
  image: {
    marginRight: getSizeFromWidth(16),
    width: 74,
    height: 74,
  },
  itemTitle: {
    fontWeight: 'bold',
    color: '#4F585E',
    fontSize: 16,
    lineHeight: 16,
    marginRight: getSizeFromWidth(15),
  },
  itemText: {
    fontSize: 12,
    marginTop: 0,
    marginBottom: 'auto',
    color: COLORS.light_gray,
  },
  itemRowTitle: {
    marginBottom: getSizeFromHeight(2),
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  borderBottom: {
    paddingVertical: getSizeFromHeight(16),
    flexDirection: 'row',
    borderBottomColor: COLORS.light_gray,
    borderBottomWidth: 1,
  },
  itemWithoutBorderBottom: {
    paddingVertical: getSizeFromHeight(16),
    flexDirection: 'row',
  },
  textOrange: {
    color: COLORS.red_orange,
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: getSizeFromWidth(15),
  },
  textStrike: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});
