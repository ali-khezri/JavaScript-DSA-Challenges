function findFirstNonRepeatingCharacter(str) {
  const char = {};

  for (let i = 0; i < str.length; i++) {
    const element = str[i];

    char[element] = (char[element] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (char[element] === 1) {
      return element;
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
