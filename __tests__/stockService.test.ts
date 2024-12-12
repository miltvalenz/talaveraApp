import Service from '../src/services/stockService';
import { Stock } from '../src/types/types';

global.fetch = jest.fn();

// TO RUN THIS TEST SUCCESSFULLLY THE SERVICE FILE SHOULD BE UPDATED REMOVING THE MOCK AND UNCOMMENT FETCH CODE
describe('Service.getStocks', () => {
  const mockResponse = {
    stocks: [
      { symbol: 'AAPL', name: 'Apple Inc.', price: 175.64, daily_change: 1.27 },
      { symbol: 'MSFT', name: 'Microsoft Corporation', price: 317.94, daily_change: -0.89 },
    ],
  };

  beforeEach(() => {
    (fetch as jest.Mock).mockReset();
  });

  it('should return stocks list successfully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const stocks: Stock[] = await Service.getStocks();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/stocks');
    expect(stocks).toEqual(mockResponse.stocks);
  });

  it('should manage API errors', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    await expect(Service.getStocks()).rejects.toThrow('Network error');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
