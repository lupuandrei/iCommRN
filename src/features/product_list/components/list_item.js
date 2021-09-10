import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';
import {Colors, Spacing} from '../../../styles';
import Strong from '../../../components/strong';

const ListItem = ({name, image, price, onPress}) => {
  console.log('image', image);
  return (
    <TouchableOpacity onPress={onPress} style={styles.cell}>
      <Image source={{uri: image}} style={{width: '80%', height: 100}} />
      <Text style={{marginTop: Spacing.SCALE_8}} h5>
        <Strong>£{price}</Strong>
      </Text>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Spacing.SCALE_8,
    backgroundColor: Colors.WHITE,
    padding: Spacing.SCALE_12,
  },
});
