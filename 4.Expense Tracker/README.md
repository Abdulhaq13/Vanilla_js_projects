# Expense Tracker 💸

A simple expense tracker app built with vanilla HTML, CSS, and JavaScript. You can add transactions, see your balance update in real time, and delete anything you don't need. Everything saves to localStorage so your data sticks around even after you close the tab.

---

## Why I built this

This was a personal project to get stronger at JavaScript. I wanted to build something practical that used real JS concepts like DOM manipulation, array methods, and browser storage — without leaning on any frameworks or libraries.

---

## What it does

- Add income or expense transactions with a description and amount
- Positive amounts are treated as income, negative amounts as expenses
- Balance, total income, and total expenses update automatically
- Delete any transaction with one click
- Transactions are saved to localStorage so they persist on refresh
- Most recent transactions show at the top
- Fully responsive — works on mobile too

---

## How to run it

No installs, no setup. Just clone or download and open the HTML file.

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
open index.html
```

Or just double-click `index.html` in your file explorer and it'll open in your browser.

---

## How to use it

1. Type a description for your transaction (e.g. "Salary" or "Groceries")
2. Enter an amount — use a positive number for income, a negative number for an expense
3. Hit **Add Transaction**
4. Your balance, income, and expense totals update instantly
5. Hover over any transaction and click ❌ to delete it

---

## Project structure

```
expense-tracker/
│
├── index.html      # the markup and structure
├── style.css       # all the styling
└── script.js       # all the logic
```

---

## What I learned building this

This project was more educational than I expected. Here's what it actually taught me:

- **DOM selection and manipulation** — querying elements, updating `innerHTML` and `textContent`
- **Event listeners** — handling form submissions and click events
- **Event delegation** — one listener on the parent `<ul>` instead of one on every delete button
- **Array methods** — `map`, `filter`, `reduce`, `slice`, `reverse`, `join` all used in this project
- **Template literals** — building HTML strings dynamically from data
- **Type conversion** — learned the hard way that `dataset` values are always strings
- **localStorage** — saving and loading data with `JSON.stringify` and `JSON.parse`
- **Intl.NumberFormat** — proper currency formatting built into the browser

---

## Built with

- HTML
- CSS
- Vanilla JavaScript (no frameworks, no libraries)

---

## Author

Built by Syed Abdul Haq Shutari — feel free to fork it, break it, or improve it.
