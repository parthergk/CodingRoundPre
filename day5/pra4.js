const users = [
  { name: "Gaurav", city: "Delhi", purchases: 5, active: true },
  { name: "Rahul", city: "Mumbai", purchases: 2, active: false },
  { name: "Amit", city: "Delhi", purchases: 8, active: true },
  { name: "Neha", city: "Bangalore", purchases: 4, active: true },
  { name: "Riya", city: "Delhi", purchases: 8, active: true },
  { name: "Karan", city: "Mumbai", purchases: 6, active: true },
];

const gruped = users
  .filter((item) => item.active === true)
  .reduce((acc, item) => {
    const key = item.city;

    if (!acc[key]) {
      acc[key] = {
        topPurchase: 0,
        activeUsers: 0,
        totalPurchases: 0,
        topBuyers: [],
      };
    }

      acc[key].activeUsers += 1;
      acc[key].totalPurchases += item.purchases;

      if (item.purchases > acc[key].topPurchase) {
        acc[key].topPurchase = item.purchases;
        acc[key].topBuyers = [item.name];
      } else if (item.purchases === acc[key].topPurchase) {
        acc[key].topBuyers.push(item.name);
      }
    return acc;
  }, {});

console.log(
  "Ouput",
  Object.keys(gruped).map((city) => ({
    city,
    activeUsers: gruped[city].activeUsers,
    totalPurchases: gruped[city].totalPurchases,
    topBuyers: gruped[city].topBuyers,
  })),
);
