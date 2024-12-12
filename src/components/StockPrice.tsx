import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StockPrice({
  price,
  dailyChange,
}: {
  price: number;
  dailyChange: number;
}) {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.priceText}>{price}</Text>
      <View
        style={[
          {backgroundColor: dailyChange > 0 ? '#59de31' : '#e82020'},
          styles.dailyChangeBox,
        ]}>
        <Text style={styles.dailyChangeText}>{dailyChange}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  dailyChangeBox: {
    width: 60,
    borderRadius: 4,
    alignItems: 'flex-end',
    padding: 4,
  },
  dailyChangeText: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
});
