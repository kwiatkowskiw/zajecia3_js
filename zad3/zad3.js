function range(a,b){
   if(a > b){
       return false;
   }
   let array = [];
   while(a <= b){
       array.push(a);
       a++;
   }
   return array;
}

console.log(range(1,4));
console.log(range(6, 4));