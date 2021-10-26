import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
const SafeAreaViewIOS = ({children}) => {
  const insets = useSafeAreaInsets();

  console.log('insets', insets);
  return (
    <View style={styles.container}>
      <View style={{height: insets.top}} />
      {children}
      <View style={{height: insets.bottom}} />
    </View>
  );
};

export default SafeAreaViewIOS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
