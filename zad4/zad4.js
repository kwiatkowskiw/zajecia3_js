function sum(arr){
    let sum = 0;
    arr.forEach(number => {
        sum += number;
    })
    return sum;
}

console.log(sum([3,7,5]));