//Program to show the grade of the students marks using switch statement

var eng=90;
var math=80;
var hindi=87;
var sci=76;
var sst=79;

var sum=eng+math+hindi+sci+sst;
console.log("Sum of student marks=",sum);

var avg=sum/5;
console.log("Average of student marks=",avg);

switch(true){
    case(avg>=90 && avg<=100):{
        console.log("Distinction!");
        break;
    }
    case(avg>=80 && avg<90):{
        console.log("First class!");
        break;
    }
    case(avg>=60 && avg<80):{
        console.log("Pass!");
        break;
    }
    default:{
        console.log("Fail!");
    }
}