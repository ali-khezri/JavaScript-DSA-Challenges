function diceGameSimulation(num) {
  let result = [];

  for (let i = 0; i < num; i++) {
    let diceObj = {};
    diceObj.dice1 = Math.floor(Math.random() * 6) + 1;
    diceObj.dice2 = Math.floor(Math.random() * 6) + 1;
    diceObj.sum = diceObj.dice1 + diceObj.dice2;
    if (diceObj.sum === 7 || diceObj.sum === 11) {
      diceObj.result = "win";
    } else if (diceObj.sum === 2 || diceObj.sum === 3 || diceObj.sum === 12) {
      diceObj.result = "lose";
    } else {
      diceObj.result = "roll again";
    }
    result.push(diceObj);
  }

  return result;
}

module.exports = diceGameSimulation;
