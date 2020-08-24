
let n ;
let f = 1;
function fact( n) {
    
    for(let i = 1; i <= n; i++)  
    {
    f = f * i;   
    }  
  return f;
}
console.log(fact(5));

function factor(number) {
  
  if (number === 0)
  {
     return 1;
  }
  
  return number * factor(number-1);
}
console.log(factor(5));