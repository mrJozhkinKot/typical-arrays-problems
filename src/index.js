
exports.min = function min (array) {
  if (array == undefined || array.length == 0) {return 0;}
  else {
  return array.reduce((a,b) => {return (a<b? a: b)});
  }
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) {return 0;}
  else {
  return array.reduce((a,b) => {return (a>b? a: b)});
  }
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) {return 0;}
  else {
  let sum = array.reduce((a,b) => {return (a+b)});
  return sum / array.length;
  }
}
