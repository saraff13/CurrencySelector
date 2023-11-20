import {StyleSheet} from 'react-native';
import {Scaling} from '../../utils';

const CurrencyDropdownStyles = () =>
  StyleSheet.create({
    main: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    currencyText: {
      width: Scaling.hs(36),
      fontSize: Scaling.ms(16),
      marginHorizontal: Scaling.hs(8),
    },
    currencyImage: {
      width: Scaling.ms(36),
      height: Scaling.ms(36),
      backgroundColor: 'red',
      borderRadius: Scaling.ms(18),
    },
    downArrow: {
      width: Scaling.ms(12),
      height: Scaling.ms(12),
      borderRadius: Scaling.ms(6),
    },
  });

export default CurrencyDropdownStyles;
