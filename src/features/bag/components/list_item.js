import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Avatar, Button, Icon, ListItem as ListI} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Strong from '../../../components/strong';
import {
  bagProductQuantityDecrease,
  bagProductQuantityIncrease,
  bagProductRemove,
} from '../../../store/actions/bag';
import {Spacing} from '../../../styles';

const ListItem = ({productId, quantity}) => {
  const dispatch = useDispatch();

  const product = useSelector(state => {
    return state.productReducer.products.find(product => {
      return product.id == productId;
    });
  });

  // Events

  const onIncreasePress = () => {
    dispatch(bagProductQuantityIncrease(productId));
  };

  const onDecreasePress = () => {
    dispatch(bagProductQuantityDecrease(productId));
  };

  const onRemovePress = () => {
    Alert.alert('Are you sure?', null, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        style: 'destructive',
        onPress: () => dispatch(bagProductRemove(productId)),
      },
    ]);
  };

  // Render

  return (
    <ListI bottomDivider>
      <Avatar title={product.name} source={{uri: product.image}} />
      <ListI.Content>
        <ListI.Title>{product.name}</ListI.Title>
        <ListI.Subtitle>£{product.price * quantity}</ListI.Subtitle>

        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginTop: Spacing.SCALE_12,
          }}>
          <Button
            title="-"
            onPress={onDecreasePress}
            disabled={quantity == 1}></Button>
          <Strong>{quantity}</Strong>
          <Button title="+" onPress={onIncreasePress}></Button>
        </View>

        <Button
          title="Remove"
          onPress={onRemovePress}
          style={{marginTop: Spacing.SCALE_18}}></Button>
      </ListI.Content>
    </ListI>
  );
};

export default ListItem;

const styles = StyleSheet.create({});
