import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ICurrencyModalProps, IRenderItemProps} from './CurrencyModal-interface';
import CurrencyModalStyles from './CurrencyModal-styles';
import Currency from '../Currency/Currency';

const CurrencyModal: React.FC<ICurrencyModalProps> = ({
  listData,
  onPressItem,
  visible,
  onPressBack,
}) => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<Array<IRenderItemProps>>([]);

  const styles = CurrencyModalStyles();

  const renderItem = (item: IRenderItemProps, index: number) => {
    return (
      <Currency
        onPress={() => onPressItem(item)}
        currencyCode={item?.currencyCode}
        currencyName={item?.currencyName}
        key={index}
      />
    );
  };

  useEffect(() => {
    setData(listData);
    return () => setSearchText('');
  }, [listData]);

  const filterData = useCallback(
    (val: string) => {
      if (val.length === 0) {
        setData(listData);
        return;
      }
      const filteredData = listData.filter(
        (item: IRenderItemProps) =>
          item?.currencyCode.toLowerCase()?.includes(val.toLowerCase()) ||
          item?.currencyName.toLowerCase()?.includes(val.toLowerCase()),
      );
      setData(filteredData);
    },
    [listData],
  );

  const onChangeText = (val: string) => {
    setSearchText(val);
  };

  useEffect(() => {
    filterData(searchText);
  }, [filterData, searchText]);

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <Pressable style={styles.backIconContainer} onPress={onPressBack}>
          <Image
            style={styles.backArrow}
            source={require('../../assets/back.png')}
          />
          <Text>Select Currency</Text>
        </Pressable>
        <View style={styles.main}>
          {listData?.length >= 10 && (
            <View style={styles.searchBarContainer}>
              <Image
                style={styles.searchIcon}
                source={require('../../assets/search.png')}
              />
              <TextInput
                placeholder="Search Currency"
                value={searchText}
                onChangeText={onChangeText}
                style={styles.searchBarStyle}
              />
            </View>
          )}
          <FlatList
            data={data}
            renderItem={({item, index}) => renderItem(item, index)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_item, index) => `${index}`}
            style={styles.flatlist}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default CurrencyModal;
