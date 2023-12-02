function calculateShippingCost() {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].total >= 6000) {
      console.log("Shipping is free");
    }
    else if (orders[i].total >= 3000 && orders[i].total <= 6000) {
      console.log("Shipping cost  is 250 baht");
    } else {
      console.log("Shipping cost is 500 baht");
    }
  }
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

console.log(calculateShippingCost(orders));
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
