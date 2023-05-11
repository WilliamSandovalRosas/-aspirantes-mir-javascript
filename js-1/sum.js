

function sum(num){
    
    if(num>0){
        let suma = (num*(num+1))/2;
        return suma;
    }
}

console.log(sum(4)); // 1 + 2 + 3 + 4 = 10
console.log(sum(10)); // 55
console.log(sum(15)); // 120