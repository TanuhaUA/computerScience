function factorial(a) {
  var res = 1;
  for (var i = 1; i <= a; i++) {
    res *= i;
  }
  return res;
}

function factorialR(a) {
  return a > 1 ? a * factorialR(a - 1) : a;
}

window.f = factorialR;
// console.log(factorialR(3));

function fib(n) {
  var res = [1,1];
  for (var i = 2; i < n; i++) {

    res.push(res[i-1] + res[i-2]);
  }
  return res[n-1];
}
var resFib = [];

function fibR(n) {
  return n > 1 ? fibR(n-1) + fibR(n-2) : n;
}

window.a = fibR;
// console.log(fibR(6));

function sumR(n) {
  return n > 1 ? n + exp(n - 1) : n;
}

window.a = sumR;
console.log(sumR(4));