import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Bag = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Bag</Text>
    </View>
  );
};

export default Bag;

const styles = StyleSheet.create({});
