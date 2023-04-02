const calcYears = (text, year, twoDigits = false, replaceWord = '$year') => {

  let yearsCalc = (new Date().getUTCFullYear() - year).toString();
  if (twoDigits) {
    yearsCalc = yearsCalc.length === 1 ? `0${yearsCalc}` : yearsCalc;
  }
  const newText = text.replace(replaceWord, yearsCalc);

  return newText;

}

export default calcYears