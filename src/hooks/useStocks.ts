import { useState, useEffect } from 'react';
import stockService from '../services/stockService';
import { Stock } from '../types/types';

export function useStocks() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    stockService
      .getStocks()
      .then(setStocks)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  const getStockBySymbol = (symbol: string) => stocks.find((stock) => stock.symbol === symbol);

  return { stocks, isLoading, error, getStockBySymbol };
}
