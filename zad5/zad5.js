function fibonacci(n){
    let arr = [];
    let a = 0, b = 1, temp;
    for (let i = 1; i <= n; i++) {
        arr.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }
    return arr;
}

console.log(fibonacci(9));