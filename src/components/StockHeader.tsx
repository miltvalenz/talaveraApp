import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StockHeader({
  symbol,
  name,
}: {
  symbol: string;
  name: string;
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.symbol}>{symbol}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingBottom: 8,
    gap: 16,
    alignItems: 'baseline',
  },
  symbol: {
    fontSize: 24,
    fontWeight: '700',
  },
  name: {
    fontSize: 16,
    fontWeight: '400',
  },
});
