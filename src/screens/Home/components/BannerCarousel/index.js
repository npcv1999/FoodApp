import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {
  COLORS,
  DATA,
  DEVICE_WIDTH,
  getSizeFromHeight,
  getSizeFromWidth,
} from '../../../../utils';
const BannerCarousel = () => {
  const data = DATA.BANNERS;
  const [activeSlider, setActiveSlider] = useState(0);

  const renderItem = ({item, index}) => {
    return (
      <View style={{marginLeft: getSizeFromWidth(24)}}>
        <Image
          source={item.img}
          style={{
            width: '100%',
            height: getSizeFromHeight(112),
            borderRadius: 8,
          }}></Image>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        onSnapToItem={index => setActiveSlider(index)}
        itemWidth={DEVICE_WIDTH - getSizeFromWidth(24)}
        sliderWidth={DEVICE_WIDTH}
        activeSlideAlignment="start"
        inactiveSlideOpacity={0.7}
        inactiveSlideScale={1}
        autoplay
        loop
      />
      <Pagination
        containerStyle={styles.paginationContainer}
        dotsLength={data.length}
        activeDotIndex={activeSlider}
        renderDots={(activeIndex, total, context) =>
          data.map((i, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={
                  activeIndex === index ? styles.dotActive : styles.dot
                }></TouchableOpacity>
            );
          })
        }
      />
    </View>
  );
};

export default BannerCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getSizeFromHeight(24),
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.light_gray,
    borderRadius: 25,
    marginHorizontal: getSizeFromWidth(1),
  },
  dotActive: {
    width: 22,
    height: 6,
    backgroundColor: COLORS.red_orange,
    borderRadius: 25,
    marginHorizontal: getSizeFromWidth(1),
  },
  paginationContainer: {
    paddingBottom: 0,
    paddingTop: getSizeFromHeight(12),
  },
});
