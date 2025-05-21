var laptopPrice = 20000;
var smartphonePrice = 15000;
var headphonePrice = 1000;

var laptopQty = +prompt("Enter quantity of laptop:")
var smartphoneQty = +prompt("Enter quantity of Smartphone:")
var headphoneQty = +prompt("Enter quantity of Headphones:")

var laptopTotal = laptopQty * laptopPrice;
var smartphoneTotal = smartphoneQty * smartphonePrice;
var headphoneTotal = headphoneQty * headphonePrice;

var totalBill = laptopTotal + smartphoneTotal + headphoneTotal;

  var discount = 0;
if (totalBill > 5000) {
      discount = totalBill * 0.20;
} else if (totalBill > 3000) {
      discount = totalBill * 0.15;
} else if (totalBill > 1000) {
      discount = totalBill * 0.10;
} else if (totalBill = 1000) {
}

var finalAmount = totalBill - discount;

document.write("Total Bill: Rs " + totalBill + "<br>");
document.write("Discount: Rs " + discount + "<br>");
document.write("Amount to Pay: Rs " + finalAmount);