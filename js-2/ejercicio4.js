function join(array){
    let string="";
    
        for (let i = 0; i<array.length;i++){
            string+=array[i]+" ";
        }
    
    
    return string;
}

console.log(join([1, 3, 2])); // 1 3 2
console.log(join([10, 9, 8, 7, 6, 5, 4])); // 10 9 8 7 6 5 4
console.log(join([])); //