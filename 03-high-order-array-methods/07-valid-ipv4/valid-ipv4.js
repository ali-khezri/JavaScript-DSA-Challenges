const isValidIPv4 = (str) => {
  const splitStr = str.split(".");

  if (splitStr.length !== 4) return false;

  return splitStr.every((element) => {
    const num = parseInt(element);
    return num >= 0 && num <= 255 && element === num.toString();
  });
};

module.exports = isValidIPv4;
