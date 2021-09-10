import React from 'react';
import {SectionList, StyleSheet} from 'react-native';
import {ListItem, Text} from 'react-native-elements';
import {SHOP_PRODUCT_LIST} from '../../navigation/screen_keys';
import {margin} from '../../styles/mixins';
import {SCALE_12, SCALE_16} from '../../styles/spacing';

const ProductCategoryList = ({navigation, route}) => {
  // adapt categories and subcategories received from server
  const categories = () => {
    return route.params.categories.map(category => {
      return {
        name: category.name,
        data: category.categories,
      };
    });
  };

  // Render

  const _renderItem = ({item}) => {
    return (
      <ListItem
        onPress={() => {
          navigation.navigate(SHOP_PRODUCT_LIST, {
            headerTitle: item,
            category: item,
          });
        }}
        bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <SectionList
      sections={categories()}
      keyExtractor={(item, index) => item + index}
      renderItem={_renderItem}
      renderSectionHeader={({section: {name}}) => (
        <Text style={margin(SCALE_16, SCALE_12, SCALE_16, SCALE_12)} h4>
          {name}
        </Text>
      )}
    />
  );
};

export default ProductCategoryList;

const styles = StyleSheet.create({});
