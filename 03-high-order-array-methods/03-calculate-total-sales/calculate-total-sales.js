function calculateTotalSalesWithTax(arr, tax) {
  const sumPrice = arr
    .map((total) => total.price * total.quantity)
    .reduce((t, acc) => t + acc, 0);

  const taxRate = tax * 0.01;

  const totalPrice = sumPrice + sumPrice * taxRate;

  return parseFloat(totalPrice.toFixed(2));
}

module.exports = calculateTotalSalesWithTax;
