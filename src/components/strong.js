import React from 'react';
import {Text} from 'react-native';
import {FONT_WEIGHT_BOLD} from '../styles/typography';

const Strong = props => (
  <Text style={{fontWeight: FONT_WEIGHT_BOLD, ...props.style}}>
    {props.children}
  </Text>
);

export default Strong;
