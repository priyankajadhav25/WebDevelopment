//Assigning grades on the basis of marks using switch statement

var eng = 80;
var math = 60;
var hindi = 70;
var sci = 65;
var sst = 76;

var sum = eng + math + hindi + sci + sst;
console.log(sum);

var avg = sum / 5;
console.log(avg);

switch (true) {
    case(avg >= 90 && avg<=100): {
        console.log("Distinction");
        break;
    }
    case(avg >= 70 && avg<90): {
        console.log("First class");
        break;
    }
    case (avg >= 60 && avg < 70): {
        console.log("Pass");
        break;
    }
    default:{
        console.log("Fail");
    }
}