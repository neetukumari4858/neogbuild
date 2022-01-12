// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17
//1

s=""
for (var i=1; i<=100; i++){
    if (i%5===0 && i%3===0){
        s=s+"FizzBuzz"+","
    }
    else if (i%5===0){
        s=s+"Buzz"+","
    }
    else if (i%3===0){
        s=s+"Fizz"+","
    }
    else{
        s=s+i+","
    }
}
console.log(s);

//2

// *
// * *
// * * *
// * * * *
// * * * * *
var i=1;
while (i<=5){
    j=1
    s=""
    while(j<=i){
        s=s+"*"+" "
        j++
    }
    console.log(s)
    i++
}

//4
// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

var n=require("readline-sync");
var num=n.question("Enter number:=")
var x=0;
var y=1;
var z=0;
s=""
while (z<=num){

    s=s+z+","
    x=y
    y=z
    z=x+y
    
}
console.log(s)

//5
var n=require("readline-sync")
var mul=1
var num=n.question("Enter number:-")
for (; num>=1; num--){
    mul=mul*num
    
}
console.log(mul)

///6
var n=require("readline-sync");
var num=n.questionInt("Enter any number:-")
var f=0;
var i=1
while (i<=num){
    if (num%i===0){
        f=f+1
    }
    i++
}
if (f==2){
    console.log("prime no")
}else{
    console.log("not prime number")
}

//7
var n=require("readline-sync");
var day=n.question("enter day :-")
if (day==="saturday" && day==="sunday"){
    console.log("weekend")
}
else{
    console.log("weekday")
}