import React from 'react';
import {View} from 'react-native';
import HeaderCpn from '../../../../components/Home/HeaderCpn';
import {DATA} from '../../../../utils';
import FlatListItem from '../FlatListItem';

const onLogItems = value => {
  console.log('items', value);
};

const PopEat = () => {
  return (
    <View>
      <HeaderCpn
        label="Popular Eatries"
        viewAll
        onPress={() => console.log('view more')}></HeaderCpn>

      <FlatListItem data={DATA.POPULAR_EAT} onPress={onLogItems}></FlatListItem>
    </View>
  );
};

export default PopEat;
