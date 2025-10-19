'use client'

import { PieChart, Pie, Tooltip } from 'recharts'

const RADIAN = Math.PI / 180

interface PieChartWithNeedleProps {
  value: number // Current value (0-100)
  title?: string
  segments?: { name: string; value: number; fill: string; description?: string; indicators?: string[] }[]
  isAnimationActive?: boolean
}

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-white p-4 rounded-lg shadow-xl border-2" style={{ borderColor: data.fill }}>
        <p className="font-bold text-gray-800 mb-2">{data.name}</p>
        {data.description && (
          <p className="text-sm text-gray-600 mb-2">{data.description}</p>
        )}
        {data.indicators && data.indicators.length > 0 && (
          <div className="space-y-1">
            <p className="text-xs font-semibold text-gray-700">Key Indicators:</p>
            {data.indicators.map((indicator: string, idx: number) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-gray-400 text-xs">•</span>
                <span className="text-xs text-gray-600">{indicator}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
  return null
}

type NeedleProps = {
  value: number
  data: { name: string; value: number; fill: string }[]
  cx: number
  cy: number
  iR: number
  oR: number
  color: string
}

const needle = ({ value, data, cx, cy, iR, oR, color }: NeedleProps) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0)
  const ang = 180.0 * (1 - value / total)
  const length = (iR + 2 * oR) / 3
  const sin = Math.sin(-RADIAN * ang)
  const cos = Math.cos(-RADIAN * ang)
  const r = 5
  const x0 = cx + 5
  const y0 = cy + 5
  const xba = x0 + r * sin
  const yba = y0 - r * cos
  const xbb = x0 - r * sin
  const ybb = y0 + r * cos
  const xp = x0 + length * cos
  const yp = y0 + length * sin

  return [
    <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      key="needle-path"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
    />,
  ]
}

export default function PieChartWithNeedle({ 
  value = 50,
  title = 'Pie Chart With Needle',
  segments = [
    { name: 'Extreme Fear', value: 25, fill: '#DC2626' },    // Deep Red
    { name: 'Fear', value: 25, fill: '#F97316' },            // Orange
    { name: 'Greed', value: 25, fill: '#22C55E' },           // Light Green
    { name: 'Extreme Greed', value: 25, fill: '#16A34A' },   // Deep Green
  ],
  isAnimationActive = true
}: PieChartWithNeedleProps) {
  const cx = 200
  const cy = 200
  const iR = 80
  const oR = 160
  
  // Calculate the needle value based on percentage
  const total = segments.reduce((sum, entry) => sum + entry.value, 0)
  const needleValue = (value / 100) * total

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      
      <div className="relative w-full flex justify-center">
        <PieChart width={420} height={240}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={segments}
            cx={cx}
            cy={cy}
            innerRadius={iR}
            outerRadius={oR}
            fill="#8884d8"
            stroke="none"
            isAnimationActive={isAnimationActive}
          />
          <Tooltip content={<CustomTooltip />} />
          {needle({ 
            value: needleValue, 
            data: segments, 
            cx, 
            cy, 
            iR, 
            oR, 
            color: '#d0d000' 
          })}
        </PieChart>
      </div>

      {/* Value display */}
      <div className="mt-4 text-center">
        <div className="text-4xl font-bold text-gray-900">
          {value.toFixed(1)}%
        </div>
        <div className="text-sm text-gray-500 mt-1">Current Value</div>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mt-6 flex-wrap justify-center">
        {segments.map((segment, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: segment.fill }}
            />
            <span className="text-sm font-medium text-gray-700">
              {segment.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

