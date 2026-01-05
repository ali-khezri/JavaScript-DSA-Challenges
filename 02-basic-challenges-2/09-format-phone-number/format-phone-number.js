function formatPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
    .slice(6, 10)
    .join("")}`;
}

module.exports = formatPhoneNumber;
