
  module.exports = function check(str, bracketsConfig) {
    let brackets = [];
    for (let i = 0 ; i < bracketsConfig.length ; i++) {
      brackets.push(bracketsConfig[i][0]+bracketsConfig[i][1]);
    }
    for (let i = 0; i < str.length; i++) {
      if (str.includes(brackets[i])) {
        str = str.replace(brackets[i], "");
        i = -1;
      }
    }

    return (str) ? false : true;
  }