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
//Area of triangle = sqrt (s*(s-a)*(s-b)*(s-c))

