//Solution
function digPow(n, p){
  var digits = (""+n).split("");
  var resultado=0;
  for (var i=0;i<digits.length;i++){
    resultado=resultado+(Math.pow(parseInt(digits[i]),(p+i)));
  }
  var compare = Math.trunc(resultado / parseInt(n));
  if(resultado==(parseInt(n)*compare)){
    return compare;
  }
  else
    return -1;
}

//Sample Tests
Test.assertEquals(digPow(89, 1), 1)
Test.assertEquals(digPow(92, 1), -1)
Test.assertEquals(digPow(46288, 3), 51)