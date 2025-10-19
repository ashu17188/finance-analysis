# Finance Analysis Dashboard

A modern, interactive finance analysis dashboard built with Next.js and deployed as a static site to GitHub Pages.

## Features

- 📊 Interactive charts and visualizations using Recharts
- 💰 Financial metrics tracking (Revenue, Expenses, Profit)
- 📈 Trend analysis with historical data
- 🎨 Modern, responsive UI design
- ⚡ Fast, static site generation with Next.js
- 🚀 Automated deployment to GitHub Pages

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: CSS Modules
- **Charts**: Recharts
- **Deployment**: GitHub Pages (Static Export)
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build

Build the static site:

```bash
npm run build
```

This generates a static export in the `out` directory.

## Deployment to GitHub Pages

### Setup

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages section
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Configure Repository Name**:
   - If your repository is NOT named `finance-analysis`, update the `basePath` and `assetPrefix` in `next.config.js`:
   ```js
   basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME/' : '',
   ```

3. **Deploy**:
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy
   - Your site will be available at: `https://YOUR-USERNAME.github.io/finance-analysis/`

### Manual Deployment

You can also manually trigger deployment from the "Actions" tab in GitHub.

## Project Structure

```
finance-analysis/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Dashboard.tsx    # Main dashboard component
│       ├── MetricsCard.tsx  # Financial metrics cards
│       ├── RevenueChart.tsx # Revenue trend chart
│       └── ExpenseChart.tsx # Expense pie chart
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow
├── next.config.js           # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Customization

### Adding New Charts

Create new chart components in `src/components/` and import them into the Dashboard:

```tsx
import YourChart from '@/components/YourChart'

// In Dashboard.tsx
<YourChart />
```

### Updating Data

Modify the data arrays in the chart components to reflect your actual financial data. In production, you might want to fetch this data from an API during build time using Next.js data fetching methods.

### Styling

Each component has its own CSS module. Modify the `.module.css` files to customize the appearance.

## License

MIT

## Contributing

Feel free to open issues or submit pull requests!

