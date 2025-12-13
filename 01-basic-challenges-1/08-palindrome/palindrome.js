function isPalindrome(str) {
  const formatStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reverseArr = formatStr.split("").reverse().join("");

  return reverseArr === formatStr;
}

module.exports = isPalindrome;
