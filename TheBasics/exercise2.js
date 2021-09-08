let num = 4936
console.log(num)
let ones = num % 10

num = (num - ones) / 10


let tens = num % 10

num = (num - tens) / 10

let hundreds = num % 10

let thousands = (num - hundreds) / 10

console.log(ones, tens, hundreds, thousands);