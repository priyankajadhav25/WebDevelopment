// Program to check whether given number is Prime or not

var number=11;
var flag=0;

console.log("The number is ",number)

for(let i=2;i<number;i++){
    if(number%i==0){
        flag=1;
    }
}

if(flag==1){
    console.log("It is not a Prime Number");
}
else{
    console.log("It is a Prime Number");
}