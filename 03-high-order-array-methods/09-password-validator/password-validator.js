// function validatePassword(str) {
//   const chars = str.split("");

//   if (chars.length < 8) return false;

//   const upper = chars.some(
//     (char) => char === char.toUpperCase() && char !== char.toLowerCase(),
//   );

//   const lower = chars.some(
//     (char) => char === char.toLowerCase() && char !== char.toUpperCase(),
//   );

//   const digit = chars.some((char) => !isNaN(parseInt(char, 10)));

//   return upper && lower && digit;
// }

function validatePassword(str) {
  return (
    str.length >= 8 && /[A-Z]/.test(str) && /[a-z]/.test(str) && /\d/.test(str)
  );
}

module.exports = validatePassword;
