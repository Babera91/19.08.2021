//lifecycle function
//declaration: 3 types
// Calling

//declaration Notation
function sayHI(){
    console.log('hi')
}
sayHI()



function sayWithName(){
    console.log(`Hi ${yourname}`)
}
sayWithName('Superman')




// Function as Variables

let sayHi2 = function(){
    console.log('Hallo')
}
sayHi2()



// x => x*x
let square = function(x){ //Deklaration
    console.log(x*x); // Berechnung
}
square(2) // wert eingabe für x



// Arrow function

let sayHi3 =()=>{
    console.log('Hola')
}


// Ausgabe des Namen mit Arrowfunction
let sayHi3WithName =(yourname)=>{
    console.log(`Hello ${yourname}`)
}
sayHi3WithName('Fabi')


//Berechnung mit Arrow function
let square2 =(x)=>{
    console.log(x*x)
}
square2(2)

// Surface 1
// Declaration Notation
function surface(w,l){
    console.log(w*l)
}
surface(5,10)


//Surface 2
//Function Variable
let surface2 = function(w,l){
    console.log(w*l)
}
surface2(5,10)


//Surface 3
// Arrow Function

let surface3 =(w,l)=>{
    console.log(w*l)
}
surface3(5,10)



//Return Befehl 
// giebt uns immer etwas zurück
// Bendet den coding block

function trySomthing(param1){
    return param1
}

let result = trySomthing('Test')
console.log(result)


// Mehrfache function mit return
let function1 =()=>{
    return 'MY'
}
let function2 =()=>{
    return 'Name is'
}

let mainFunction = (username)=>{
    let text1 = function1()
    let text2 = function2()
    console.log(text1 + text2 + username)
}
mainFunction('Fabian')


// hoisting
// Behavior of using variable* or functions before delcaration
// variable: var // let and const are not hoisted

num1 = 10 
console.log(num1)
var num1
sayHello()
function sayHello(){
    console.log('hello')
}
sayHello()



// scope in Javascript
// global scope
// local scope
console.log('we are not be golbal scope')
function fool(){
    console.log('Local scope')
    console.log('fool')
    function foo2(){
        console.log('we are one foo2')
        console.log('foo2')
    }
    foo2() // inherhalb der function richtig
}
fool()
// foo2() : ReferenzError auserhalb der function



// local scope: function scope und block scope
if(true){
    console.log('local scope')
    console.log('block scope')
}

switch (true) {
    case true:
        console.log('local scope1')
        console.log('block scope1') 
        break;
}

// let : blockscoped
// const: blockscoped
// var : function scope

let fizz='outside'
console.log(fizz)
if (true){
    let fizz = 'inside'
    console.log(fizz)
}
console.log(fizz)


// const variable
const fizz2 = 'outside2'
console.log(fizz2)
if (true){
    const fizz2 = 'inside'
    console.log(fizz2)
}
console.log(fizz2)

// var variable

var fizz3 = 'outside2'
console.log(fizz3)
if (true){
    var fizz3 = 'inside'
    console.log(fizz3)
}
console.log(fizz3)

var fruit = 'apple'
console.log(fruit) // ausgabe apfel

function fruits(){
    var fruit = 'Oragne'
    console.log(fruit) // ausgabe orange
    if(true){
        var fruit = 'banana'
        console.log(fruit) // ausgabe banana
    }
    console.log(fruit) // ausgabe banana
}

fruits()
console.log(fruit) // ausgabe apfel

// let variable

let vegetable = 'potato'
console.log(vegetables)

function vegetables(){
    let vegetable = 'tomato'
    console.log(vegetable)
}
vegetables()
//console.log(vegetable)
