//Program of string reverse using function

function StringReverse(Value) {
    var val = "";
    for (let i = Value.length-1; i >= 0; i--){
        val=val+ Value[i];
    }
    return val;
}

var str = 'Yogesh';
var x = StringReverse(str);
console.log(x);

