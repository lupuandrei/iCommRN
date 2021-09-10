import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import ProductCategoryList from '../../features/product_category_list';
import ProductDetails from '../../features/product_details';
import ProductList from '../../features/product_list';
import ShopMenu from '../../features/shop_menu';
import * as screenKeys from '../screen_keys';

// STACK
const Stack = createStackNavigator();
class NavigationStack extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={screenKeys.SHOP_MENU}>
        <Stack.Screen
          name={screenKeys.SHOP_MENU}
          component={ShopMenu}
          options={{
            title: 'Shop',
          }}
        />
        <Stack.Screen
          name={screenKeys.SHOP_CATEGORY_LIST}
          component={ProductCategoryList}
          options={({route}) => ({
            title: route.params?.headerTitle ?? 'Categories',
          })}
        />

        <Stack.Screen
          name={screenKeys.SHOP_PRODUCT_LIST}
          component={ProductList}
          options={({route}) => ({
            title: route.params?.headerTitle ?? 'Products',
          })}
        />

        <Stack.Screen
          name={screenKeys.SHOP_PRODUCT_DETAILS}
          component={ProductDetails}
          options={() => ({title: ''})}
        />
      </Stack.Navigator>
    );
  }
}

export default NavigationStack;
