'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const priceHistory = [
  { date: 'Dec 9', price: 90000 },
  { date: 'Dec 10', price: 95000 },
  { date: 'Dec 11', price: 98000 },
  { date: 'Dec 12', price: 100000 },
  { date: 'Dec 13', price: 102000 },
  { date: 'Dec 14', price: 103000 },
  { date: 'Dec 15', price: 104330 }
];

export default function BitcoinChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={priceHistory} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="date"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={['dataMin - 1000', 'dataMax + 1000']}
            ticks={[30000, 60000, 90000, 120000]}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            axisLine={false}
            tickLine={false}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}