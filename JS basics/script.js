// def: JavaScript is a cross-platform(multiple platform(chrome,firefox,edge,etc...)), object-oriented scripting language. It is a small and lightweight language. Inside a host environment ( a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.


//1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
//ans ::
// const toDay = new Date();
// const day = toDay.getDay();
// const dayList = ["sunday","monday","tuesuaday","wednesday","thursday","friday","saturday"];
// const exactday = console.log("Today is : "+dayList[day-1]); 

// const timeHour = toDay.getHours();
// const PmAm = (timeHour >= 12) ? " PM" : " AM"
// const timeMinute = toDay.getMinutes();
// const timeSecond = toDay.getSeconds();

// console.log(timeHour+ PmAm+" : "+timeMinute+" : "+timeSecond);

//2. Write a JavaScript program to print the current window contents.
//ans : 
//   function Printpage(){
//     window.print();
//   }
// 3. Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// ans: 
//  const date = new Date();
//  console.log(date.getDate() +"-" + (date.getMonth()+1) + "-" + date.getFullYear());

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7

// const side1 = 5;
// const side2 = 6;
// const side3 = 7;
// const semiPerimeter = (side1+side2+side3)/2;
// const area = Math.sqrt(semiPerimeter * ((semiPerimeter-side1)*(semiPerimeter-side2) *(semiPerimeter-side3)));
// console.log(area);
// //Area of triangle = sqrt (s*(s-a)*(s-b)*(s-c))

// function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// console.log(leapyear(2016));

// closure

// outer function
// function greet(name) {

//     // inner function
//     function displayName() {
//         console.log('Hi' + ' ' + name);
//     }

//     // calling inner function
//     displayName();
// }

// // calling outer function
// greet("John"); // Hi John
//spread op

// const obj = { a: 1, b: 45 };
// const objClone = { ...obj };
// const arr =[1,45,45,90];
// console.log(objClone);
// const arrClone = [...arr];
// console.log(arrClone);

//call
//apply
//bind
var employee1={
    firstName : "Kiran",
    secondName : "Madiwalar"
}
var employee2 = {
    firstName : "arun",
    secondName :"aron"
}

function greet (greeting1,greeting2){
    console.log(greeting1+" "+this.firstName+ " " + this.secondName + ", " + greeting2 );
}

//call=>
// greet.call(employee1,"Hello","How are You?")
// greet.call(employee2,"Hello","How are You?")

//apply=>
//  greet.apply(employee1, ["hello", "How are you ?"])
//  greet.apply(employee2, ["hello", "How are you ?"])

//bind=>
//  var inviteEmployee1 = greet.bind(employee1);
//  var inviteEmployee2 = greet.bind(employee2);

//  inviteEmployee1("hello", "how are you ?");
//  inviteEmployee2("hello", "how are you ?");

//HoF
// A Hof is function, that takes the function as arguments and return a function as output.
// const arr1 = [10,45,90];
// const arr2 = arr1.map(function name(item){
//     return item*10;
// });
//  console.log(arr2);

//Unary Function/monodic fn:
// const unaryFunction = a => a + 20;
// console.log(unaryFunction(45)); // o/p : 65

//currying function

// function volume (length) {
//     return function(breadth){
//         return function (height){
//             return length *breadth *height ;
//         }
//     }
// }
// console.log(volume(20)(40)(60));

//setTimeOut and setinterval

// setTimeout(()=>{ console.log("hiii");},5000) // hiii will print once after 5 secs(once only)

// setInterval(()=>{console.log("hello");},2000); // hello will print every 2 sec interval (repeated)


//precedence of global and local variable

//local variable takes the precedence over a global variable

// var msg = "Good morning";
// function greeting() {
//   msg = "Good Evening";
// }
// greeting();
// console.log(msg);

//var let const
 
// var a = 10;
// var a = 45;
// a= 50;
// console.log(a);// o/p +> 50;

//var can be redeclared, reassigned and can be updated;

// let a =10;
// a=50;
// console.log(a); // o/p => 50
// let cannot be redeclared, cannot be reassiagned and only updated;

// const a =45;
 // const "cannot" be redeclared,reassigned,updated...