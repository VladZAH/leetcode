
const clsrSum = (m) => {
 return function(n) {
   return m + n
 }
}

console.log(clsrSum(3)(5))
