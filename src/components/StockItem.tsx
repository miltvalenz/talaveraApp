import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import StockHeader from './StockHeader';
import StockPrice from './StockPrice';

export default function StockItem({stock, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.item}>
        <StockHeader symbol={stock.symbol} name={stock.name} />
        <StockPrice price={stock.price} dailyChange={stock.daily_change} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
