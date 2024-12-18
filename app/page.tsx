'use client';

import { Bitcoin, Sparkles, AlertCircle } from 'lucide-react';
import BitcoinChart from '@/components/BitcoinChart';
import CryptoBooksSection from '@/components/CryptoBooksSection';
import { useEffect, useState } from 'react';

interface BitcoinData {
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
}

export default function Home() {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        setError(null);
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.bitcoin || !data.bitcoin.usd) {
          throw new Error('Invalid data format received');
        }

        setBitcoinData({
          current_price: data.bitcoin.usd,
          market_cap: data.bitcoin.usd_market_cap,
          total_volume: data.bitcoin.usd_24h_vol,
          price_change_percentage_24h: data.bitcoin.usd_24h_change
        });
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        setError('Unable to fetch Bitcoin data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBitcoinData();
    const interval = setInterval(fetchBitcoinData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-orange-500 to-amber-400">
      <div className="container mx-auto px-4">
        <header className="py-4 flex justify-between items-center">
          <div className="flex items-center text-white">
            <Bitcoin className="mr-2" />
            <h1 className="text-2xl font-bold">BitJay&apos;s Bitcoin Tracker</h1>
          </div>
          <div className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg flex items-center">
            <Sparkles className="mr-2 h-4 w-4" />
            Bitcoin Price Tracker
          </div>
        </header>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
              <p className="text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {/* Current Price Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-gray-600 mb-2">Current Price</p>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {isLoading ? 'Loading...' : 
                  bitcoinData ? `$${bitcoinData.current_price.toLocaleString()}` : 'N/A'}
              </h2>
              <span className={`${bitcoinData?.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {isLoading ? 'Loading...' :
                  bitcoinData ? `${bitcoinData.price_change_percentage_24h.toFixed(2)}%` : 'N/A'}
              </span>
            </div>
          </div>

          {/* Price History Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-gray-600 mb-4">Price History (7 Days)</p>
            <BitcoinChart />
          </div>

          {/* Market Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center text-blue-600 mb-2">
                <span className="text-sm">Market Cap</span>
              </div>
              <p className="text-2xl font-bold">
                {isLoading ? 'Loading...' :
                  bitcoinData ? `$${(bitcoinData.market_cap / 1e9).toFixed(2)}B` : 'N/A'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center text-purple-600 mb-2">
                <span className="text-sm">24h Volume</span>
              </div>
              <p className="text-2xl font-bold">
                {isLoading ? 'Loading...' :
                  bitcoinData ? `$${(bitcoinData.total_volume / 1e9).toFixed(2)}B` : 'N/A'}
              </p>
            </div>
          </div>

          {/* Books Section */}
          <CryptoBooksSection />
        </div>
      </div>
    </main>
  );
}