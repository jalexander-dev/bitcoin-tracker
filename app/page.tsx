import { Bitcoin, Sparkles } from 'lucide-react';
import BitcoinChart from '@/components/BitcoinChart';
import CryptoBooksSection from '@/components/CryptoBooksSection';

export default function Home() {
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

        <div className="space-y-4">
          {/* Current Price Card */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-gray-600 mb-2">Current Price</p>
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">$104.33K</h2>
              <span className="text-green-500">↗ 2.56%</span>
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
              <p className="text-2xl font-bold">$2064.74B</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center text-purple-600 mb-2">
                <span className="text-sm">24h Volume</span>
              </div>
              <p className="text-2xl font-bold">$83.63B</p>
            </div>
          </div>

          {/* Books Section */}
          <CryptoBooksSection />
        </div>
      </div>
    </main>
  );
}