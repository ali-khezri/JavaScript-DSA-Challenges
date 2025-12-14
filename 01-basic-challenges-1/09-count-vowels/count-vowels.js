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

// a e i o u

// test("Counting vowels in a string", () => {
//   expect(countVowels("Hello, World!")).toBe(3);
//   expect(countVowels("JavaScript")).toBe(3);
//   expect(countVowels("OpenAI Chatbot")).toBe(6);
//   expect(countVowels("Coding Challenge")).toBe(5);
// });
