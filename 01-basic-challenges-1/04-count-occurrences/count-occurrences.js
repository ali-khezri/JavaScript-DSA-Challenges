function countOccurrences(search, char) {
  let count = 0;

  for (const element of search) {
    if (element === char) {
      count++;
    }
  }

  return count;
}

module.exports = countOccurrences;
