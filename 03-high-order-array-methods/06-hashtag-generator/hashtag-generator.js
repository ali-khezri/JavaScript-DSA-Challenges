function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  const formatStr = str
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  // .map((word) => word[0].toUpperCase() + word.slice(1));

  //   const hashtag = ["#", ...formatStr].join("");
  const hashtag = "#" + formatStr.join("");

  return hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;
