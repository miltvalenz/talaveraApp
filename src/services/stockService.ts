const BASE_URL = 'https://api.example.com/stocks';

import { Stock } from '../types/types';

const mock = {
    'stocks': [
      {
        'symbol': 'AAPL',
        'name': 'Apple Inc.',
        'price': 175.64,
        'daily_change': 1.27,
      },
      {
        'symbol': 'MSFT',
        'name': 'Microsoft Corporation',
        'price': 317.94,
        'daily_change': -0.89,
      },
      {
        'symbol': 'GOOGL',
        'name': 'Alphabet Inc.',
        'price': 2843.42,
        'daily_change': 2.12,
      },
      {
        'symbol': 'AMZN',
        'name': 'Amazon.com, Inc.',
        'price': 3457.67,
        'daily_change': -1.45,
      },
      {
        'symbol': 'TSLA',
        'name': 'Tesla, Inc.',
        'price': 734.09,
        'daily_change': 3.85,
      },
      {
        'symbol': 'FB',
        'name': 'Meta Platforms, Inc.',
        'price': 341.37,
        'daily_change': -0.77,
      },
    ],
  };


export default {
  getStocks: async (): Promise<Stock[]> => {
    // const response = await fetch(BASE_URL);
    // const json = await response.json();
    // return json.stocks;
    return mock.stocks;
  },
};
