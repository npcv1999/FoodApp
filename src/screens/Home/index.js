import React from 'react';
import {View, Text, ScrollView, Image, TextInput} from 'react-native';
import SafeAreaViewIOS from '../../components/SafeAreaViewIOS';
import {COLORS, IMAGES} from '../../utils';
import BannerCarousel from './components/BannerCarousel';
import CategoriesComponent from './components/Categories';
import NearbyComponents from './components/Nearby';
import PopCuisinesCpn from './components/PopCuisines';
import PopEat from './components/PopEatries';
import {styles} from './styles';

const Home = ({navigation}) => {
  return (
    <SafeAreaViewIOS>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <View>
              {/* Name User */}
              <Text style={styles.nameUser}>
                Hello, <Text style={{color: COLORS.red_orange}}>Occoho!</Text>
              </Text>

              {/* Location */}
              <Text>
                North Bridge, Halifax{'  '}
                <Image source={IMAGES.down} style={styles.arrowDown}></Image>
              </Text>
            </View>

            {/* Avatar user */}
            <Image source={IMAGES.user} style={styles.avtUser}></Image>
          </View>
          {/* Search */}
          <View style={styles.searchBar}>
            <Image source={IMAGES.search} resizeMode="contain"></Image>

            <TextInput
              style={styles.txtSearch}
              placeholder="Search for restaurants, dishes..."></TextInput>
          </View>
          {/* Carousel */}
          <BannerCarousel></BannerCarousel>
          {/* Popular Eatries */}
          <PopEat {...navigation}></PopEat>
          {/* Categories */}
          <CategoriesComponent></CategoriesComponent>
          {/* NearBy */}
          <NearbyComponents></NearbyComponents>
          {/* Popular cuisines */}
          <PopCuisinesCpn></PopCuisinesCpn>
        </View>
      </ScrollView>
    </SafeAreaViewIOS>
  );
};

export default Home;
