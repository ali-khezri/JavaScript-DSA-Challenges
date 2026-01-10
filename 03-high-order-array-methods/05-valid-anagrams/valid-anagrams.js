function validAnagrams(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  console.log(arr1, arr2);

  const red1 = arr1.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const red2 = arr2.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(red1).every((char) => red2[char] === red1[char])

}

module.exports = validAnagrams;
