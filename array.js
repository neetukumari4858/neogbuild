a=[10,4,5,2,5,6,9]
sum=0
for (var i of a){
    sum=sum+i
}
console.log(sum)

//2
a=[10,4,5,2,5,6,9]
var sum=0
var c=0
for (var i of a){
    sum=sum+i
    c=c+1
}
console.log("average",(parseInt(sum/c)))

//3
a=[10,4,5,1,50,6,9]
var max=0;
var min=a[0]
for (var i of a){
    if (i>max){
        max=i
    }
    if (i<min){
        min=i
    }
}

console.log("max",max)
console.log("min",min)

//4
l=[]
l2=[]
const b=[5,3,10,2,78,10,10,33,33,56];
for (var i of b){
    if (!l.includes(i)){
        l.push(i)
    }
}
for (var j of l){
    var c=0
    for (var k of b){
        if (k===j){
            c++
        }
    }
    if (c>1){
        l2.push(c +"  "+j)
    }
}
console.log(l2)

//5
a=[3,5,2,9,4]
b=[6,2,8,1,3] 
var sum1=0
var sum2=0
for (var i of a){
    sum1=sum1+i
}
for (var j of b){
    sum2=sum2+j
}
console.log(sum1+sum2)

//6
var a="My name is Neetu ";
var b=["a","e","i","o","u"];
var  Vowel_c=0
var consonant_c=0
for (var i of a){
    if (b.includes(i)){
        Vowel_c++
    }else{
        consonant_c++
    }
}
console.log("vowel count",Vowel_c)
console.log("consonant",consonant_c)

//7
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
var a=[1,2,3,4,5] ;
var b=[]
var c=a.length-1;
b.push(a[c])
for (var i=0; i<=a.length-2; i++){
    b.push(a[i])
}
console.log(b)