//Program to check whether the number is prime or not

var num = 7;
var flag=0;

for (let i = 2; i <num; i++){
    if (num % i == 0) {
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