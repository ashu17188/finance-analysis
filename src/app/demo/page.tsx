'use client'

import { useState } from 'react'
import PieChartWithNeedle from '@/components/PieChartWithNeedle'

export default function DemoPage() {
  const [value, setValue] = useState(65)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-secondary-500 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Pie Chart With Needle Demo
          </h1>
          <p className="text-white/90 text-lg">
            Interactive gauge chart with customizable segments and needle indicator
          </p>
        </div>

        {/* Main Pie Chart */}
        <div className="bg-white p-8 rounded-xl shadow-2xl mb-8">
          <PieChartWithNeedle 
            value={value}
            title="Stock Market Sentiment Indicator"
            segments={[
              { name: 'Extreme Fear', value: 25, fill: '#DC2626' },
              { name: 'Fear', value: 25, fill: '#F97316' },
              { name: 'Greed', value: 25, fill: '#22C55E' },
              { name: 'Extreme Greed', value: 25, fill: '#16A34A' },
            ]}
          />
          
          {/* Value Slider */}
          <div className="mt-8 px-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adjust Value: {value}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Additional Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Performance Score */}
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <PieChartWithNeedle 
              value={85}
              title="Performance Score"
              segments={[
                { name: 'Poor', value: 40, fill: '#DC2626' },
                { name: 'Fair', value: 40, fill: '#F59E0B' },
                { name: 'Good', value: 40, fill: '#10B981' },
                { name: 'Excellent', value: 30, fill: '#3B82F6' },
              ]}
            />
          </div>

          {/* Example 2: Risk Level */}
          <div className="bg-white p-6 rounded-xl shadow-xl">
            <PieChartWithNeedle 
              value={35}
              title="Risk Assessment"
              segments={[
                { name: 'High Risk', value: 60, fill: '#EF4444' },
                { name: 'Medium Risk', value: 50, fill: '#F59E0B' },
                { name: 'Low Risk', value: 40, fill: '#10B981' },
              ]}
            />
          </div>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center mt-8">
          <a 
            href="/"
            className="inline-block px-6 py-3 bg-white text-primary-500 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}

