function sales(carsSold) {
  let obj = {};

  carsSold.map((car) => {
    obj[car.make] ? (obj[car.make] += car.price) : (obj[car.make] = car.price);
  });

  return obj;
}
module.exports = sales;
