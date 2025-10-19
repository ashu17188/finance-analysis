'use client'

import fpiData from '@/data/fpiSectorData.json'

export default function FPISectorChart() {
  const { reports, category } = fpiData

  return (
    <div className="space-y-8">
      {/* Display all reports in chronological order (latest first) */}
      {[...reports].reverse().map((report, reportIndex) => {
        const { sectors, summary, reportDate, previousReportDate } = report
        const isLatest = reportIndex === 0
        
        return (
          <div key={reportDate} className="space-y-4">
            {/* Report Header */}
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-bold text-white">
                Report: {new Date(reportDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </h2>
              {isLatest && (
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                  LATEST
                </span>
              )}
            </div>

            {/* Sector Details Table */}
      <div className="bg-white p-6 rounded-xl shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Detailed Sector Comparison</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
            {category} Investment
          </span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-200 bg-gray-50">
              <th className="text-left p-3 font-semibold text-gray-700" rowSpan={2}>Sector</th>
              <th className="text-center p-2 font-semibold text-blue-700 border-l border-gray-300" colSpan={3}>
                AUC (₹ Crores)
              </th>
              <th className="text-center p-2 font-semibold text-green-700 border-l border-gray-300" colSpan={3}>
                Net Investment (₹ Crores)
              </th>
              <th className="text-right p-3 font-semibold text-gray-700 border-l border-gray-300" rowSpan={2}>
                % Total
              </th>
            </tr>
            <tr className="border-b-2 border-gray-200 bg-gray-50 text-xs">
              <th className="text-right p-2 text-gray-600 border-l border-gray-200">Previous</th>
              <th className="text-right p-2 text-gray-600">Current</th>
              <th className="text-right p-2 text-gray-600">Change</th>
              <th className="text-right p-2 text-gray-600 border-l border-gray-200">Previous</th>
              <th className="text-right p-2 text-gray-600">Current</th>
              <th className="text-right p-2 text-gray-600">Change</th>
            </tr>
          </thead>
          <tbody>
            {sectors.map((sector, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-blue-50">
                <td className="p-3 text-gray-800 font-medium">{sector.sector}</td>
                
                {/* AUC Columns */}
                <td className="p-2 text-right text-gray-600 border-l border-gray-200">
                  {sector.previousAuc.toLocaleString()}
                </td>
                <td className="p-2 text-right text-gray-900 font-semibold">
                  {sector.currentAuc.toLocaleString()}
                </td>
                <td className={`p-2 text-right font-medium ${
                  sector.aucDifference >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {sector.aucDifference >= 0 ? '+' : ''}{sector.aucDifference.toLocaleString()}
                </td>
                
                {/* Net Investment Columns */}
                <td className={`p-2 text-right border-l border-gray-200 ${
                  sector.previousNetInvestment >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {sector.previousNetInvestment >= 0 ? '+' : ''}{sector.previousNetInvestment.toLocaleString()}
                </td>
                <td className={`p-2 text-right font-semibold ${
                  sector.currentNetInvestment >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {sector.currentNetInvestment >= 0 ? '+' : ''}{sector.currentNetInvestment.toLocaleString()}
                </td>
                <td className={`p-2 text-right font-medium ${
                  sector.netInvestmentDifference >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {sector.netInvestmentDifference >= 0 ? '+' : ''}{sector.netInvestmentDifference.toLocaleString()}
                </td>
                
                {/* Percentage */}
                <td className="p-3 text-right text-gray-600 border-l border-gray-200">
                  {((sector.currentAuc / summary.currentTotalAuc) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-gray-300 font-bold bg-gray-100">
              <td className="p-3 text-gray-900">Total</td>
              
              {/* AUC Totals */}
              <td className="p-2 text-right text-gray-700 border-l border-gray-200">
                {summary.previousTotalAuc.toLocaleString()}
              </td>
              <td className="p-2 text-right text-gray-900">
                {summary.currentTotalAuc.toLocaleString()}
              </td>
              <td className={`p-2 text-right ${
                summary.aucDifference >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {summary.aucDifference >= 0 ? '+' : ''}{summary.aucDifference.toLocaleString()}
              </td>
              
              {/* Net Investment Totals */}
              <td className={`p-2 text-right border-l border-gray-200 ${
                summary.previousTotalNetInvestment >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {summary.previousTotalNetInvestment >= 0 ? '+' : ''}{summary.previousTotalNetInvestment.toLocaleString()}
              </td>
              <td className={`p-2 text-right ${
                summary.currentTotalNetInvestment >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {summary.currentTotalNetInvestment >= 0 ? '+' : ''}{summary.currentTotalNetInvestment.toLocaleString()}
              </td>
              <td className={`p-2 text-right ${
                summary.netInvestmentDifference >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {summary.netInvestmentDifference >= 0 ? '+' : ''}{summary.netInvestmentDifference.toLocaleString()}
              </td>
              
              <td className="p-3 text-right text-gray-900 border-l border-gray-200">100.00%</td>
            </tr>
          </tfoot>
        </table>
      </div>
          </div>
        )
      })}
    </div>
  )
}

