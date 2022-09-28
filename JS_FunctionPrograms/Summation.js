//Summation of array elements using function

function Summation(Value) {
    let sum = 0;
    for (let i = 0; i < Value.length; i++){
        sum = sum + Value[i];
    }
    return sum;
}

const arr = [10, 20, 30, 40, 50];
const x = Summation(arr);
console.log(x);