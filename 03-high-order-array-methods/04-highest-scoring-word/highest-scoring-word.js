// function highestScoringWord(str) {
//   const arr = str.split(" ");

//   const scores = arr.map((score) => {
//     let count = 0;

//     for (const element of score) {
//       count += element.charCodeAt(0) - 96;
//     }

//     return count;
//   });

//   let highScore = 0;
//   let highIndex = 0;

//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > highScore) {
//       highScore = scores[i];
//       highIndex = i;
//     }
//   }

//   return arr[highIndex];
// }

function highestScoringWord(str) {
  const arr = str.split(" ");
 
  const scores = arr.map((score) => {
    return Array.from(score).reduce(
      (total, letter) => total + letter.charCodeAt(0) - 96,
      0
    );
  });
  
  const highScore = Math.max(...scores);
  const highIndex = scores.indexOf(highScore);
  

  return arr[highIndex];
}
module.exports = highestScoringWord;
