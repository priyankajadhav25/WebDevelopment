//Program to find even count using function

function EvenCount(ArrayValues) {
    var count = 0;
    for (let i = 0; i < ArrayValues.length; i++){
        if (ArrayValues[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}
const arr = [28, 29, 33, 4, 9, 86, 102];
var x = EvenCount(arr);
console.log('Even number count :', x);