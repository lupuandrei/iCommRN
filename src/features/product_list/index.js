import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {SHOP_PRODUCT_DETAILS} from '../../navigation/screen_keys';

const ProductList = ({navigation}) => {
  return (
    <View>
      <Text>Test</Text>
      <Button
        title="product details"
        onPress={() => {
          navigation.navigate(SHOP_PRODUCT_DETAILS);
        }}></Button>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
