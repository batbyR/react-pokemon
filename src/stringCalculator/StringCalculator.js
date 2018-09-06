export const add = s => {
  let delimeter = ",";

  //Check for delimeter
  if (s.startsWith("//")) {
    //Match //[....]\n
    const prefix = s.slice("3", s.indexOf("\n") - 1);
    let suffix = s.slice(s.indexOf("\n") + 1);

    const delimeters = prefix.split("][");
    delimeter = delimeters[0];

    if (delimeters.length > 1) {
      for (let j = 1; j < delimeters.length; j++) {
        suffix = suffix.replace(delimeters[j], delimeter);
      }
    }

    s = suffix;
  }

  if (s.length === 0) {
    return 0;
  } else {
    //We don't care about "\n" character
    s = s.replace("\n", delimeter);

    const split = s.split(delimeter);

    let sum = 0;
    let negatives = "";

    for (let i = 0; i < split.length; i++) {
      let nextInt = parseInt(split[i], 10);
      if (nextInt < 0) {
        negatives = negatives.concat(` ${nextInt}`);
      }
      // Number bigger than 1000 are not considered
      if (nextInt < 1000) {
        sum += nextInt;
      }
    }
    if (negatives !== "") {
      return `negatives not allowed:${negatives}`;
    }
    return sum;
  }
};
