import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function StockDetails({
  price,
  dailyChange,
}: {
  price: number;
  dailyChange: number;
}) {
  return (
    <View style={styles.contentWrapper}>
      <Text style={styles.content}>Price: {price}</Text>
      <Text style={styles.content}>Daily change: {dailyChange}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 18,
    fontWeight: 600,
  },
  contentWrapper: {
    paddingTop: 8,
    gap: 6,
  },
});
