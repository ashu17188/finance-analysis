'use client'

import PieChartWithNeedle from './PieChartWithNeedle'
import FPISectorChart from './FPISectorChart'
import marketSentiment from '@/data/marketSentiment.json'

export default function Dashboard() {
  const { currentSentiment, sentimentRanges, lastUpdated } = marketSentiment

  const getSentimentColor = (value: number) => {
    if (value <= 25) return '#DC2626'
    if (value <= 50) return '#F97316'
    if (value <= 75) return '#22C55E'
    return '#16A34A'
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="text-center mb-12 text-white">
        <h1 className="text-4xl font-bold mb-2">Finance Analysis Dashboard</h1>
        <p className="text-lg opacity-90">Real-time financial insights and analytics</p>
      </header>

      {/* Main Analysis Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-white">Stock Market Sentiment</h2>
          <div className="text-right">
            <p className="text-xs text-white/60">Published</p>
            <p className="text-sm text-white font-medium">
              {new Date(lastUpdated).toLocaleString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>
        <p className="text-white/80">Real-time market sentiment analysis</p>
      </div>
      
      <div className="space-y-6">
        {/* Stock Market Sentiment Pie Chart */}
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
          <PieChartWithNeedle 
            value={currentSentiment.value}
            title="Stock Market Sentiment"
            segments={sentimentRanges.map(range => ({
              name: range.name,
              value: range.value,
              fill: range.color
            }))}
          />
          
          {/* Current Status */}
          <div className="mt-6 text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Current Market Sentiment</p>
            <p 
              className="text-3xl font-bold mb-2"
              style={{ color: getSentimentColor(currentSentiment.value) }}
            >
              {currentSentiment.label}
            </p>
            
            {/* Last Updated */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                Last Updated: {new Date(lastUpdated).toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>

        {/* FPI Sector Analysis Section */}
        <div className="mt-12">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-white mb-2">Sector-wise Investment Analysis (Equity)</h2>
          </div>
          <FPISectorChart />
        </div>
      </div>
    </div>
  )
}

