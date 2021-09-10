import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {SHOP_PRODUCT_DETAILS} from '../../navigation/screen_keys';
import {productList} from '../../store/actions/product';
import {Spacing} from '../../styles';
import ListItem from './components/list_item';

const ProductList = ({navigation}) => {
  const products = useSelector(state => {
    return state.productReducer.products;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length == 0) {
      dispatch(productList());
    }
  });

  // RENDER

  _renderItem = ({item}) => {
    return (
      <ListItem
        name={item.name}
        image={item.image}
        price={item.price}
        onPress={() => {
          navigation.navigate(SHOP_PRODUCT_DETAILS, {item});
        }}></ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={_renderItem} numColumns={2} />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    margin: Spacing.SCALE_8,
    paddingTop: Platform.OS === 'ios' ? Spacing.SCALE_16 : 0,
  },
});
