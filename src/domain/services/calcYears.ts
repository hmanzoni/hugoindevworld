const calcYears = (text: string, year: number, twoDigits = false, replaceWord = '$year'): string => {
  let yearsCalc = (new Date().getUTCFullYear() - year).toString();
  if (twoDigits) {
    yearsCalc = yearsCalc.length === 1 ? `0${yearsCalc}` : yearsCalc;
  }
  return text.replace(replaceWord, yearsCalc);
};

export default calcYears;
