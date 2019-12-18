function randomDistinctNumbers(max) {
  let num1;

  while (true) {
    let randomNum = Math.floor(Math.random() * max);

    if (!num1) {
      num1 = randomNum;
      continue;
    }

    if (randomNum !== num1) {
      return [num1, randomNum];
    }
  }
}

module.exports = {
  randomDistinctNumbers
};
