//Program to find whether number is even or odd using function

function EvenOdd(Value) {
    if (Value % 2 == 0) {
        console.log("Number is Even");
    }
    else {
        console.log("Number is Odd");
    }
    return Value;
}

var num=30;
EvenOdd(num);
