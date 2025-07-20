# 🧾 Electronics Store Billing System

This JavaScript project calculates the total bill for purchasing laptops, smartphones, and headphones. It also applies a discount based on the total purchase amount.

## 📌 Features

- Takes quantity input for:
  - Laptops
  - Smartphones
  - Headphones
- Calculates the total cost for each item.
- Applies discount based on total bill.
- Displays:
  - Total bill
  - Discount
  - Final amount after discount

## 💰 Price List

| Product       | Price (PKR) |
|---------------|-------------|
| Laptop        | 20,000      |
| Smartphone    | 15,000      |
| Headphones    | 1,000       |

## 🎯 Discount Rules

| Total Bill Amount (PKR) | Discount Applied |
|-------------------------|------------------|
| Above 5000              | 20%              |
| Above 3000              | 15%              |
| Above 1000              | 10%              |
| 1000 or less            | No Discount      |

> 💡 **Note:** There is a minor bug in the original code:
>
> ```js
> else if (totalBill = 1000)
> ```
> It should be:
> ```js
> else if (totalBill === 1000)
> ```
> Or simply removed, as no discount applies for exactly 1000.

## 🧠 Concepts Used

- Variables
- Arithmetic operations
- User input using `prompt()`
- Output using `document.write()`
- Conditional statements (`if`, `else if`)
- Basic type conversion with `+prompt()`

## ▶️ How to Run

1. Copy the JavaScript code into a `.html` file inside `<script>` tags.
2. Open the file in a browser.
3. Enter the quantities when prompted.
4. See your final bill on the screen.

## 📄 License

This project is for educational purposes and is open to all.
