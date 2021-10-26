import React from 'react';
import {View, Text} from 'react-native';
import HeaderCpn from '../../../../components/Home/HeaderCpn';
import {DATA} from '../../../../utils';
import FlatListItem from '../FlatListItem';

const NearbyComponents = () => {
  return (
    <View>
      <HeaderCpn label="Nearby" viewAll></HeaderCpn>
      <FlatListItem data={DATA.POPULAR_EAT}></FlatListItem>
    </View>
  );
};

export default NearbyComponents;
