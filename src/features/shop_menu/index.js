import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {SHOP_CATEGORY_LIST} from '../../navigation/screen_keys';

const ShopMenu = ({navigation}) => {
  console.log('navigation', navigation);
  return (
    <View>
      <Text>Menu</Text>
      <Button
        title="categories"
        onPress={() => {
          navigation.navigate(SHOP_CATEGORY_LIST);
        }}></Button>
    </View>
  );
};

export default ShopMenu;

const styles = StyleSheet.create({});
