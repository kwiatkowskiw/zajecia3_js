function isHappyNumber(number){
    if(number > 0){
        let castNumber = Array.from(String(number), Number);
        let sum;
        while(sum !== 1){
            sum = 0;
            castNumber.forEach(amount => {
                sum += Math.pow(amount, 2);
            })
            console.log(sum);
            castNumber = Array.from(String(sum), Number);
        }
        return true;
    }
    return false;
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(-1));