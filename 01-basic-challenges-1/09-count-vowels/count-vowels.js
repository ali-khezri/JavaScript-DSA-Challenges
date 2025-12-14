function countVowels(str) {
  const formatStr = str.toLowerCase();

  let count = 0;
  for (let i = 0; i < formatStr.length; i++) {
    const element = formatStr[i];

    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  }
  return count;
}

module.exports = countVowels;

