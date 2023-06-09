function romanToDecimal(roman) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    let decimal = 0;

    for (let i = 0; i < roman.length; i++) {
      const currentNum = romanNumerals[roman[i]];
      const nextNum = romanNumerals[roman[i + 1]];

      if (nextNum && currentNum < nextNum) {
        decimal += nextNum - currentNum;
        i++;
      } else {
        decimal += currentNum;
      }
    }

    return decimal;
}

  function convert() {
    const romanNumeral = document.querySelector('#romanInput').value;
    const decimalNumber = romanToDecimal(romanNumeral.toUpperCase());
    document.querySelector('#result').innerText = decimalNumber;
  }