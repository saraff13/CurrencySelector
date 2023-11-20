import {StyleSheet} from 'react-native';
import {Scaling} from '../../utils';

const HomeStyles = () =>
  StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    currencyContainer: {
      height: Scaling.vs(200),
    },
  });

export default HomeStyles;
