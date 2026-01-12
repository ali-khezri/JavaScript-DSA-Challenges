const isValidIPv4 = (str) => {
  const splitStr = str.split(".");

  if (splitStr.length !== 4) return false;

  return splitStr.every((element) => {
    const num = parseInt(element);
    return num >= 0 && num <= 255 && element === num.toString();
  });
};

module.exports = isValidIPv4;

// const result1 = isValidIPv4('122.164.23.21');
// const result2 = isValidIPv4('122.164.23.21.33');

// test('Checking Valid IPv4 Addresses', () => {
//   expect(isValidIPv4('1.2.3.4')).toBe(true);
//   expect(isValidIPv4('123.45.67.89')).toBe(true);
//   expect(isValidIPv4('1.2.3')).toBe(false);
//   expect(isValidIPv4('1.2.3.4.5')).toBe(false);
//   expect(isValidIPv4('123.456.78.90')).toBe(false);
//   expect(isValidIPv4('123.045.067.089')).toBe(false);
// });
