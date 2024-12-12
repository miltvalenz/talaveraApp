import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useStocks} from '../hooks/useStocks';
import StockHeader from '../components/StockHeader';
import StockDetails from '../components/StockDetails';

export default function StockDetailScreen() {
  const {params} = useRoute();
  const {stockSymbol} = params;
  const {getStockBySymbol} = useStocks();
  const stock = getStockBySymbol(stockSymbol);

  if (!stock) {
    return <Text>Stock not found.</Text>;
  }

  return (
    <View style={styles.container}>
      <StockHeader symbol={stock.symbol} name={stock.name} />
      <StockDetails price={stock.price} dailyChange={stock.daily_change} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
