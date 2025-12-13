// function isPalindrome(str) {
//   const formatStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   const reverseArr = formatStr.split("").reverse().join("");

//   return reverseArr === formatStr;
// }

function isPalindrome(str) {
  const formattedStr = removeNonAlphanumeric(str.toLowerCase());
  const rev = reverseString(formattedStr);
  return rev === formattedStr;
}

function removeNonAlphanumeric(str) {
  let formatStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isAlphaNumeric(char)) {
      formatStr += char;
    }
  }
  return formatStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  return (
    (code >= 48 && code <= 57) || // Numbers 0-9
    (code >= 97 && code <= 122) // Lowercase letters a-z
  );
}

function reverseString(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

module.exports = isPalindrome;
