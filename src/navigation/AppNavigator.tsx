import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StockListScreen from '../screens/StockListScreen';
import StockDetailScreen from '../screens/StockDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StockList"  >
        <Stack.Screen name="StockList" component={StockListScreen}/>
        <Stack.Screen name="StockDetail" component={StockDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
