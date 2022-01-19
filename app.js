//User inputs bill
let subtotal = Number(prompt("Enter the cost of your bill: "));

let taxedBill = subtotal*1.07;
let tip = taxedBill*0.05;
let finalBill = taxedBill+tip;







//display

document.body.innerHTML = "Your final bill is: $"+finalBill;