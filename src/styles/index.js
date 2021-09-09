import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Mixins from './mixins';
import {StyleSheet} from 'react-native';

export {Typography, Spacing, Colors, Mixins};

export const STYLE_SHARED = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    flex: 1,
    padding: Spacing.SCALE_16,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Spacing.BOTTOM_SPACE,
  },
});
