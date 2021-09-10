import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ListEmpty from '../../components/list_empty';
import {isEmpty} from '../../utils/helper';
import ListItem from './components/list_item';

const Bag = () => {
  const dispatch = useDispatch();

  const bag = useSelector(state => {
    return state.bagReducer.bag;
  });

  // Render

  const _keyExtractor = (item, index) => index.toString();

  const _renderList = () => {
    // get all product ids which was added into the bag
    const productIds = Object.keys(bag);
    return (
      <View>
        <FlatList
          data={productIds}
          keyExtractor={_keyExtractor}
          renderItem={({item}) => {
            return (
              <ListItem
                productId={item}
                quantity={bag[item].quantity}></ListItem>
            );
          }}></FlatList>
      </View>
    );
  };

  return <View>{isEmpty(bag) ? <ListEmpty /> : _renderList()}</View>;
};

export default Bag;

const styles = StyleSheet.create({});
