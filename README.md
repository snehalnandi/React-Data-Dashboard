# Inventory & Data Analytics Dashboard

A React dashboard prototype for browsing a fictional product inventory, alongside Jupyter notebooks that demonstrate introductory data analysis and cleaning with Pandas.

**Demo:** [Open the CodeSandbox demo](https://p63zhd.csb.app/)  
**Source:** [Browse this repository](https://github.com/snehalnandi/React-Data-Dashboard)

## What it demonstrates

### React dashboard
- Overview page with summary metrics and an inventory preview
- Inventory table with live filtering by product name, SKU, or category
- Customer directory showing order count and spend
- Interactive settings toggles
- Dark/light theme switching
- Sidebar navigation and responsive layout

The dashboard's sample inventory is defined in `App.jsx`; it is a frontend prototype, not a connected inventory service. There is no backend or database in this repository.

### Data analysis notebooks

| Notebook | Focus |
|---|---|
| `01_Intro_to_Pandas_Analysis.ipynb` | Loading and inspecting tabular data, and computing basic totals |
| `02_My_Solo_Code.ipynb` | Additional independent Pandas practice |
| `03_Data_Cleaning.ipynb` | Missing values, type conversion, and duplicate handling |

## Technology

- **UI:** React, Tailwind CSS utility classes, lucide-react
- **Data analysis:** Python, Pandas, Jupyter Notebook
- **Demo hosting:** CodeSandbox (linked above)

## Repository contents

```text
React-Data-Dashboard/
├── App.jsx
├── 01_Intro_to_Pandas_Analysis.ipynb
├── 02_My_Solo_Code.ipynb
├── 03_Data_Cleaning.ipynb
└── README.md
```

## Working with the notebooks

Use Python 3.8 or newer. From the repository directory:

```bash
python -m pip install pandas jupyter
jupyter notebook
```

Then open one of the `.ipynb` files in the Jupyter interface. Notebook results can vary with package versions and execution order; restart the kernel and run cells from top to bottom if results are inconsistent.

## Running the React source locally

**Current limitation:** this repository contains the `App.jsx` component but does not currently include a `package.json`, HTML entry point, or Vite configuration. Therefore, `npm install` and `npm run dev` will not work from a fresh clone as it stands. Use the hosted demo, or add and test a proper React/Vite project scaffold before advertising local setup instructions.

## Scope and future work

This is a learning and portfolio prototype. It does not currently connect to a real API or database and does not include an automated test suite.

Possible next improvements:
- Add a verified local React/Vite setup and lockfile
- Add charts for stock and revenue trends
- Connect the UI to an API or database
- Add component tests and accessibility checks
- Type the components with TypeScript
