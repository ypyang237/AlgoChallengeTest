var sumOfSquareRoot = function(n) {

  if(typeof n !==('number')) {
    throw new Error('that is not a number');

  }

  sum = 0;
  for(i = 1; i<= n; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
};

module.exports = sumOfSquareRoot;