import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {SHOP_PRODUCT_LIST} from '../../navigation/screen_keys';

const ProductCategoryList = ({navigation}) => {
  console.log('navigation', navigation);
  return (
    <View>
      <Text>Product category list</Text>
      <Button
        title="product list"
        onPress={() => {
          console.log('ma-ta', navigation);
          navigation.navigate(SHOP_PRODUCT_LIST);
        }}></Button>
    </View>
  );
};

export default ProductCategoryList;

const styles = StyleSheet.create({});
