const numbers = [2, 3, 4, 5, 6, 10, 12, 15, 20]
console.log(numbers.reduce((total, value) => total + value, 0));


let total = 0;
for(const num of numbers) {
    total = total + num;
    // console.log(total);
}
console.log(total);