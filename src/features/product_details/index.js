import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import FitImage from 'react-native-fit-image';
import {useDispatch, useSelector} from 'react-redux';
import PrimaryButton from '../../components/buttons/primary_button';
import {bagProductAdd} from '../../store/actions/bag';
import {productDetails} from '../../store/actions/product';
import {SCALE_16, SCALE_18} from '../../styles/spacing';

const ProductDetails = ({route}) => {
  const {productId} = route.params;

  const product = useSelector(state => {
    return state.productReducer.products.find(product => {
      return product.id == productId;
    });
  });

  const dispatch = useDispatch();
  useEffect(() => {
    // although in this context I have all details about of the product I prefer to fetch again all details about that item
    dispatch(productDetails(productId));
  }, []);

  // Events

  const onAddToBagPress = () => {
    dispatch(bagProductAdd(productId, 1));
  };

  return (
    <ScrollView>
      <FitImage resizeMode="contain" source={{uri: product.image}} />
      <View style={styles.container}>
        <Text h4>{product.name}</Text>
        <Text h5>£{product.price}</Text>

        <PrimaryButton
          title="Add to back"
          style={{marginTop: SCALE_18}}
          onPress={onAddToBagPress}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    padding: SCALE_16,
  },
});
