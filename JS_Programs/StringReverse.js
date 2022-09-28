//Program to check whether the string is palindrome or not

var str = "eye";
var len = str.length;
var strRev="";

for (let i = len-1; i >= 0; i--){
    strRev = strRev + str[i];
}
console.log(strRev);

if (str == strRev) {
    console.log("String is palindrome");
}
else {
    console.log("String is not palindrome");
}