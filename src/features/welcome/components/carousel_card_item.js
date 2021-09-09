import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Strong from '../../../components/strong';
import {Colors, Spacing} from '../../../styles';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = SLIDER_WIDTH;

const CarouselCardItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.image} />
      </View>

      <View style={styles.textsContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.bodyText}>{item.body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ITEM_WIDTH,
  },
  imageContainer: {
    flex: 0.95,
    paddingHorizontal: Spacing.SCALE_16,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  textsContainer: {
    padding: Spacing.SCALE_8,
  },
  titleText: {
    marginTop: Spacing.SCALE_16,
    textAlign: 'center',
    fontWeight: '600',
  },
  bodyText: {
    textAlign: 'center',
    color: Colors.GRAY_DARK,
  },
});

export default CarouselCardItem;
