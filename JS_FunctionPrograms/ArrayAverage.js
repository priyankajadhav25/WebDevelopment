//Average of Array elements using function

function Average(Value){
    var sum = 0;
    for (let i = 0; i <Value.length; i++){
        sum = sum + Value[i];
    }
    avg = sum / 5;
    return avg;
}

const arr = [10, 20, 30, 40, 50];
var x=Average(arr);
console.log(x);


