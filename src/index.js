module.exports = function solveEquation(equation) {
  var buf = equation.replace(/\\* \* x\^2/g, '');
  var buf2 = buf.replace(/\\* \* x/g, '');
  var result = buf2.replace(/ /g, '');
  var arr = [];
  var tempStr = '';
  var startWithMinus = (result[0] == "-");
  var i = 0;
  if (startWithMinus) {
    i = 1;
  }

  for (i; i <= result.length; i++) {

    if (i == result.length ) {

      var numb = parseInt(tempStr);
      if (startWithMinus) {
        numb = -numb;
      }
      arr.push(numb);
      tempStr = '';
      continue;
    }
    if (result[i] == '+') {
      var numb = parseInt(tempStr);
      if (startWithMinus) {
        numb = -numb;
      }
      startWithMinus = false;
      arr.push(numb);
      tempStr = '';
      continue;
    }

    else if (result[i] == '-') {

      var numb = parseInt(tempStr);
      if (startWithMinus) {
        numb = -numb;
      }
      startWithMinus = true;
      arr.push(numb);
      tempStr = '';
      continue;
    } else {

      tempStr = tempStr.concat(result[i]);
    }
  }

   a = arr[0];
   b = arr[1];
   c = arr[2];

   D = b*b - (4 * a * c);

  if (D > 0) {
    x1 = (b*(-1) - Math.pow(D, 1 / 2)) / (2 * a);
    x2 = (b*(-1) + Math.pow(D, 1 / 2)) / (2 * a);
  }
  else {
    x1 = x2 = - b / (2 * a);
  }

  decision = [];
  decision.push(Math.round(x1));
  decision.push(Math.round(x2));
  decision.sort(function (a, b) { return a - b; });
  return decision;


}

