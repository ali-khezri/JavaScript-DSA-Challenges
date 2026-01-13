function analyzeCarMileage(arr) {
  const totalMileage = arr.reduce((total, acc) => total + acc.mileage, 0);

  const averageMileage = parseFloat((totalMileage / arr.length).toFixed(2));

  const highestMileageCar = arr.reduce(
    (high, acc) => (acc.mileage > high.mileage ? acc : high),
    arr[0]
  );

  const lowestMileageCar = arr.reduce(
    (low, acc) => (acc.mileage < low.mileage ? acc : low),
    arr[0]
  );

  return { averageMileage, highestMileageCar, lowestMileageCar, totalMileage };
}

module.exports = analyzeCarMileage;
