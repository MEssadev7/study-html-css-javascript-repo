// step : 1 [first starting]

console.log(`Make another folder and add script.js with html file `);

// step : 2 [employ role access system]

let role = prompt(`Enter your role : (admin / manager / developer / intern)`);
switch (role) {
  case `admin`:
    alert`You have full access`;
    console.log(`you have full access`);
    break;

  case `manager`:
    alert`Team managment access`;
    console.log(`Team managment access`);
    break;

  case `developer`:
    alert`Code access`;
    console.log(`Code access`);
    break;

  case "intern":
    alert("Limited access");
    console.log(`Limited access`);
    break;

  default:
    alert("Invalid role entered");
    console.log(`Invalid role entered`);
}

// step : 3 [online payment selection]

let payment = prompt(`Enter your payment : (credit / debit / upi / cod )`);
switch (payment) {
  case `credit`:
    alert`You selected Credit Card Payment.`;
    console.log(`You selected Credit Card Payment.`);
    break;

  case `debit`:
    alert`You selected debit card payment.`;
    console.log(`You selected debit card payment.`);
    break;

  case `upi`:
    alert`You selected UPI payment.`;
    console.log(`You selected UPI payment.`);
    break;

  case `cod`:
    alert` You selected cash on delivery (COD) . Pay when your order is arrived`;
    console.log(
      ` You selected cash on delivery (COD) . Pay when your order is arrived`,
    );
    break;

  default:
    alert`Invalid payment method. Please select credit, debit, upi, or cod.`;
    console.log(
      `Invalid payment method. Please select credit, debit, upi, or cod.`,
    );
}

// step  : 4 [order stataus checker ]

let orderStatus = prompt(
  `Enter order status : (placed / packed / shipped / delivered / cancelled)`,
);
switch (orderStatus) {
  case `placed`:
    alert`Your order has been placed successfully.`;
    console.log(`Your order has been placed successfully.`);

    break;

  case `packed`:
    alert`Your order has been packed and ready for shipping `;
    console.log(`Your order has been packed and ready for shipping `);

    break;
  case `shipped`:
    alert`Your order has been shipped and is on its way.`;
    console.log(`Your order has been shipped and is on its way.`);

    break;
  case `deliverd`:
    alert`Your order has been diliverd successfully`;
    console.log(`Your order has been diliverd successfully`);

    break;
  case `cancelled`:
    alert`Your order has been cancelled`;
    console.log(`Your order has been cancelled`);

    break;
  default:
    alert`Invalid order status. Please enter a valid status.`;
    console.log(`Invalid order status. Please enter a valid status.`);
}

// step : 5 [office working day checker]
let checker = prompt(`Enter day name (monday / friday / sunday)`);
switch (checker) {
  case `monday`:
    alert`Working day `;
    console.log(`Working day `);
    break;
  case `friday`:
    alert`Half day`;
    console.log(`Half day `);
    break;
  case `sunday`:
    alert`Holiday`;
    console.log(`Holiday`);
    break;
  default:
    alert` Eid day `;
    console.log(`Eid day`);
}

// step : 6 [default case very important ]
let defult = prompt(`default case very important (name) `);
switch (defult) {
  case `name`:
    alert`Muhammad Essa`;
    console.log(`Muhammad Essa`);
    break;
  default:
    alert`Default or alert is very important in last of the switch satement`;
    console.log(
      `Default or alert is very important in last of the switch satement`,
    );
}
