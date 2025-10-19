# Weekend Analysis Feature

## Overview
The Weekend Analysis feature displays comprehensive performance metrics for weekend operations using interactive Pie Charts with Needles (Gauge Charts).

## Components Created

### 1. **GaugeChart.tsx**
A reusable gauge chart component with a needle indicator.
- Shows value as a semicircle gauge
- Needle points to the current value
- Color-coded based on performance ranges (Red < 30%, Orange < 60%, Green < 80%, Blue ≥ 80%)
- Displays percentage and absolute values

### 2. **AdvancedGaugeChart.tsx**
An enhanced gauge chart with customizable ranges and colors.
- Multi-segment gauge with custom color ranges
- Dynamic needle color based on current range
- Displays current range label
- Legend with range indicators

### 3. **WeekendComparisonChart.tsx**
Bar chart comparing weekday vs weekend performance.
- Revenue, Transactions, and Efficiency comparison
- Variance percentages displayed

## Data Source

### weekendAnalysis.json
Located at: `src/data/weekendAnalysis.json`

**Structure:**
```json
{
  "weekendMetrics": [
    {
      "id": "weekend_revenue",
      "title": "Weekend Revenue Performance",
      "value": 78,
      "maxValue": 100,
      "description": "..."
    }
  ],
  "weekendBreakdown": {
    "saturday": { "revenue": 45000, "transactions": 320, "efficiency": 85 },
    "sunday": { "revenue": 38000, "transactions": 275, "efficiency": 79 }
  },
  "comparison": {
    "weekdayAverage": { ... },
    "weekendAverage": { ... },
    "variancePercentage": { ... }
  },
  "insights": [ ... ]
}
```

## Dashboard Integration

The Weekend Analysis section includes:

1. **Three Gauge Charts** (Needle Charts)
   - Weekend Revenue Performance (78%)
   - Weekend Transaction Volume (65%)
   - Weekend Operational Efficiency (82%)

2. **Weekend Breakdown Card**
   - Saturday and Sunday detailed metrics
   - Revenue, Transactions, and Efficiency for each day

3. **Key Insights Card**
   - Color-coded insights (Green = Positive, Red = Negative, Blue = Neutral)
   - Actionable recommendations

4. **Comparison Chart**
   - Weekday vs Weekend bar chart
   - Variance percentages for all metrics

## Usage

### Viewing the Dashboard
1. The dev server should be running at http://localhost:3000
2. Scroll down to see the "Weekend Analysis" section
3. All data is loaded from the static JSON file

### Customizing Data
Edit `src/data/weekendAnalysis.json` to update:
- Gauge chart values (0-100 scale)
- Saturday/Sunday breakdown numbers
- Comparison metrics
- Insights messages

### Adding More Metrics
To add a new gauge chart, add an entry to `weekendMetrics` array:
```json
{
  "id": "new_metric",
  "title": "New Metric Title",
  "subtitle": "Subtitle",
  "value": 85,
  "maxValue": 100,
  "description": "Description text"
}
```

## Features

✅ **Interactive Gauge Charts** - Needle points to current value
✅ **Color-Coded Performance** - Visual indicators for performance levels
✅ **Static JSON Data** - Easy to update without code changes
✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Tailwind CSS** - Modern, clean styling
✅ **TypeScript** - Type-safe components

## Next Steps

1. **Connect to Real Data**: Replace JSON file with API calls
2. **Add Date Range Selector**: Filter weekend data by date range
3. **Add Export Feature**: Export weekend reports as PDF/CSV
4. **Add Drill-Down**: Click on metrics to see hourly breakdown
5. **Add Alerts**: Set thresholds for automatic alerts

