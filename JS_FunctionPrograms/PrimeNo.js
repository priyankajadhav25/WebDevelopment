//Program to check whether the number is prime or not using function

function PrimeNum(Value){
    var flag=0;
    for (let i = 2; i <Value; i++){
        if (Value % i == 0) {
            flag=1;
            break;
        }
    }
    if (flag == 1) {
        console.log("It is not a prime number");
    }
    else {
        console.log("It is a prime number");
    }
}

var num = 7;
PrimeNum(num);
