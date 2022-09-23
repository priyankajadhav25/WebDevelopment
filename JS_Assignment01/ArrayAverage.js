//Program to Calculate the sum and average of given array elements

var x=[10,20,30,40,50];
var sum=0;

console.log("Given array is ",x);
for(let i=0;i<x.length;i++){
    sum=sum+x[i];
}

console.log("Sum of given array is ",sum);
var avg=sum/5;
console.log("Average of given array is ",avg);