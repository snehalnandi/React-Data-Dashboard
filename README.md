# Inventory & Data Analytics Dashboard

A multi-page business dashboard built with **React** and **Tailwind CSS**, paired with **Python / Pandas** data analysis notebooks on the same dataset. Demonstrates frontend state management, live filtering, dark/light theming, and exploratory data analysis.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-CodeSandbox-f7df1e?logo=codesandbox)](https://p63zhd.csb.app/)

---

## Problem

Small businesses managing eco-friendly product inventories often rely on scattered spreadsheets with no live filtering, no visual overview, and no way to identify low-stock items quickly. Separately, raw sales data needs cleaning and exploration before it can drive decisions.

This project addresses both problems: a web dashboard for real-time inventory navigation and a data notebook pipeline for order analysis.

---

## Features

### React Dashboard (`App.jsx`)
- **Overview page** — at-a-glance metrics with a live inventory preview
- **Inventory page** — searchable table filtering by product name, SKU, or category in real time
- **Customers page** — customer directory table with order count and spend
- **Settings page** — notification preference toggles with interactive switch UI
- **Dark / Light mode** — toggleable via a single state flag; all colour tokens update instantly
- **Responsive layout** — collapsible sidebar with icon + label navigation

### Jupyter Notebooks
| Notebook | Content |
|----------|---------|
| `01_Intro_to_Pandas_Analysis.ipynb` | Loading order data, `head()` / `info()` inspection, computing totals |
| `02_My_Solo_Code.ipynb` | Independent analysis on the dataset |
| `03_Data_Cleaning.ipynb` | Handling `NaN` values, type casting, deduplication |

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 |
| Styling | Tailwind CSS |
| Icons | lucide-react |
| Data Analysis | Python 3, Pandas |
| Notebooks | Google Colab / Jupyter |
| Hosting | CodeSandbox |

---

## Project Structure

```
React-Data-Dashboard/
├── App.jsx                          # Main React application (dashboard UI)
├── 01_Intro_to_Pandas_Analysis.ipynb
├── 02_My_Solo_Code.ipynb
├── 03_Data_Cleaning.ipynb
└── README.md
```

---

## Running Locally

### Dashboard (React)

> **Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install react react-dom lucide-react

# Start development server (if using Vite)
npm run dev
```

Or open the CodeSandbox link directly — no setup required.

### Notebooks (Python)

> **Prerequisites:** Python 3.8+, Pandas

```bash
pip install pandas jupyter

# Open any notebook
jupyter notebook 01_Intro_to_Pandas_Analysis.ipynb
```

All notebooks also include an **"Open in Colab"** badge at the top — click it to run without any local setup.

---

## Sample Dataset

The dashboard uses a fictional eco-friendly product inventory:

| SKU | Product | Category | Stock |
|-----|---------|----------|-------|
| SKU-JT01 | Printed Jute Tote | Bags | 15 |
| SKU-BS02 | Braided Sling | Accessories | 4 |
| SKU-ES03 | Bulk Export Sack | Industrial | 50 |
| SKU-EH04 | Embroidered Handbag | Bags | 0 |

The notebooks use a corresponding order ledger (`.csv`) with columns: `OrderID`, `Date`, `Product_SKU`, `Quantity`, `Unit_Price_INR`.

---

## Security & Notes

- All data is **fictional** — no real customer information is stored or transmitted
- The dashboard runs entirely client-side; no backend or API keys required
- Notebook outputs are pre-rendered for easy viewing without execution

---

## Future Improvements

> These are planned enhancements, not current features.

- [ ] Connect dashboard to a real REST API or database
- [ ] Add charts (bar/line) for stock trends and revenue over time
- [ ] Integrate notebook analysis output as dashboard KPI cards
- [ ] Add TypeScript types to the React components
- [ ] Write unit tests with React Testing Library
