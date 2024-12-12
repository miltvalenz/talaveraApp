import React from 'react';
import {FlatList, Text} from 'react-native';
import {useStocks} from '../hooks/useStocks';
import {Stock} from '../types/types';
import StockItem from '../components/StockItem';

export default function StockListScreen({navigation}) {
  const {stocks, isLoading, error} = useStocks();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error loading stocks.</Text>;
  }

  return (
    <FlatList
      data={stocks}
      keyExtractor={(item: Stock) => item.symbol}
      renderItem={({item}) => (
        <StockItem
          stock={item}
          onPress={() =>
            navigation.navigate('StockDetail', {stockSymbol: item.symbol})
          }
        />
      )}
    />
  );
}
