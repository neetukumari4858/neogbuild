// 1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
var num1=5
var num2=13
var num3=7 
var num4=21
var num5=48
var sum=num1+num2+num3+num4+num5
console.log(sum)

// 2.Write a program to take a number input from user and determine whether the number is odd or even.
let n=require("readline-sync");
let num=n.question("Enter  any number:-")
if (num%2===0){
    console.log("even",num)
}else{
    console.log("odd",num)
}

// 3 Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.
let num1=129;
let num2=251;
if (num1>num2){
    console.log(`num1  is max ${num1}`)

}
if (num1<num2){
    console.log(`num1 is min ${num1}`)
}
if (num2>num1){
    console.log(`num2  is max ${num2}`)

}
if (num2<num1){
    console.log(`num2 is min ${num2}`)
}

// 4.Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.
var num1=8 
var num2=23 
var num3=17
if (num1>num2 && num1>num3){
    console.log(`num1 is the max ${num1}`)
}
else if (num2>num3 && num2>num1){
    console.log(`num2 is the max ${num2}`)
}
else if (num3>num1 && num3>num2){
    console.log(`num3 is the max ${num3}`)
}

// 6.Write program to take a month as an input from the user and find out whether the month has 31 days or not.
var n=require("readline-sync")
var month=n.questionInt("Enter month:-")
if (month===1){
    console.log(`31 days`)
}
if (month===2){
    console.log(` not 31 days`)
}
if (month===3){
    console.log(`31 days`)
}
if (month===4){
    console.log(` not 31 days`)
}
if (month===5){
    console.log(` 31 days`)
}
if (month===6){
    console.log(` not 31 days`)
}
if (month===7){
    console.log(`31 days`)
}
if (month===8){
    console.log(`31 days`)
}
if (month===9){
    console.log(` not  31 days`)
}
if (month===10){
    console.log(`31 days`)
}
if (month===11){
    console.log(`not  31 days`)
}
if (month===12){
    console.log(`31 days`)
}



