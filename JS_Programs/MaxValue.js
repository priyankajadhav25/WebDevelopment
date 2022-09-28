//Finding Max value from given array

const arr = [30, 60, 40, 89, 90, 10];
var max=0;
max = arr[0];

for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);