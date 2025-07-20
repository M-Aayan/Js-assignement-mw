🧾 Electronics Store Billing System
This simple JavaScript program calculates the total bill for purchasing laptops, smartphones, and headphones. It also applies a discount based on the total amount spent.

📂 Project Overview
Language: JavaScript

Type: Beginner-level project using basic JavaScript concepts like variables, arithmetic operations, conditions, and prompt()/document.write().

💻 Features
Accepts quantity input from user via prompt() for:

Laptops

Smartphones

Headphones

Calculates total price for each item.

Adds up total bill.

Applies discount based on billing amount:

20% discount if total > 5000

15% discount if total > 3000

10% discount if total > 1000

Displays the total bill, discount, and final payable amount using document.write().

🧮 Price Details
Product	Price (PKR)
Laptop	20,000
Smartphone	15,000
Headphones	1,000

📊 Discount Criteria
Total Bill Range (PKR)	Discount
Above 5000	20% off
Above 3000	15% off
Above 1000	10% off
1000 or below	No discount

🚀 How to Run
Copy the code into a .html file inside a <script> tag, or into a .js file linked to an HTML page.

Open the HTML file in your browser.

Enter quantities when prompted.

View the calculated bill and discount in the browser window.

🛠 Concepts Used
prompt() for user input

document.write() for output

Type coercion using +prompt()

Conditional logic (if...else if)

Arithmetic operations

📌 Note
There is a small bug in this line:

js
Copy
Edit
else if (totalBill = 1000)
It should be a comparison (===) instead of assignment (=), or better: remove it entirely, as no discount is applied for total = 1000.
