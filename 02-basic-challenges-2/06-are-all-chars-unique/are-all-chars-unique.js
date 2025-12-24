// function areAllCharactersUnique(str) {
//   if (str.length === 0) return true;
//   const formatStr = str.split("");
//   const setStr = new Set(formatStr);

//   if (formatStr.length !== setStr.size) return false;
//   else return true;
// }

function areAllCharactersUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    if (charCount[element]) {
      return false;
    }
    charCount[element] = true;
  }

  return true;
}



module.exports = areAllCharactersUnique;
