function foo(a,b){
  a = Number(a);
  b = Number(b);
  return a + b;
}
console.log(foo(1, "1")); //output: 2
console.log(foo(1, 1)); //output: 2