
const clsr = (m) => {
 return function(n) {
   return m + n
 }
}

console.log(clsr(3)(5))
