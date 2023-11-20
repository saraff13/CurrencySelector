import {StyleSheet} from 'react-native';
import {Scaling} from '../../utils';

const CurrencyDropdownStyles = () =>
  StyleSheet.create({
    main: {
      marginBottom: Scaling.vs(12),
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    currencyCode: {
      width: Scaling.hs(36),
      fontSize: Scaling.ms(16),
      marginHorizontal: Scaling.hs(12),
    },
    currencyImage: {
      width: Scaling.ms(36),
      height: Scaling.ms(36),
      backgroundColor: 'red',
      borderRadius: Scaling.ms(18),
    },
  });

export default CurrencyDropdownStyles;
