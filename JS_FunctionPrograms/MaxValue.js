//Finding Max value using function

const arr = [100, 200, 300, 400, 500];
var max = 0;
max = arr[0];

function FindMax(Value) {
    for (let i = 0; i < Value.length; i++){
        if (Value[i] > max) {
            max = Value[i];
        }
    }
    return max;
}

console.log(FindMax(arr));








