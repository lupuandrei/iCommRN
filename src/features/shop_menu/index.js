import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {Avatar, Button, ListItem} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {SHOP_CATEGORY_LIST} from '../../navigation/screen_keys';
import {appMenu} from '../../store/actions/app';

const ShopMenu = ({navigation}) => {
  const menuOptions = useSelector(state => {
    return state.appReducer.menu;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (menuOptions.length == 0) {
      dispatch(appMenu());
    }
  }, []);

  // MARK: - Render

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({item}) => {
    return (
      <ListItem
        onPress={() => {
          navigation.navigate(SHOP_CATEGORY_LIST, {
            headerTitle: item.name,
            categories: item.children,
          });
        }}
        bottomDivider>
        <Avatar source={{uri: item.img}} />
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <FlatList
      data={menuOptions}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}></FlatList>
  );
};

export default ShopMenu;

const styles = StyleSheet.create({});
