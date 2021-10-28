import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';
import HeaderCpn from '../../../../components/Home/HeaderCpn';
import {ROUTES} from '../../../../navigations/Routes';
import {DATA} from '../../../../utils';
import FlatListItem from '../FlatListItem';

const onLogItems = value => {
  console.log('items', value);
};

const PopEat = () => {
  const navigation = useNavigation();
  return (
    <View>
      <HeaderCpn
        label="Popular Eatries"
        viewAll
        onPress={() => console.log('view more')}></HeaderCpn>

      <FlatListItem
        data={DATA.POPULAR_EAT}
        onPress={() =>
          console.log('aaa', navigation.navigate(ROUTES.RESTAURANT))
        }></FlatListItem>
    </View>
  );
};

export default PopEat;
