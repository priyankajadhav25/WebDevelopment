//Assigning grades on the basis of marks using if-else ladder

var eng = 80;
var math = 60;
var hindi = 70;
var sci = 65;
var sst = 76;

var sum = eng + math + hindi + sci + sst;
console.log(sum);

var avg = sum / 5;
console.log(avg);

if (avg >= 90 && avg<=100) {
    console.log("Distinction");
}
else if (avg >= 70 && avg<90) {
    console.log("First class");
}
else if (avg >= 60 && avg<70) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
