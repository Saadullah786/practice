               // Assignment # 38-44 JAVASCRIPT

// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

// function power(a,b) {
//     alert("The value of a raised to b is "+Math.pow(a,b));
// }

// power(4,3);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function year() {
//     var a = +prompt("Enter Year IN Numbers","2012");
//     if (a == 2004 || a == 2008 || a == 2012 || a == 2016 || a == 2020) {
//         alert("The year you enter is a leap year");
//     } else {
//         alert("The year you enter is not a leap year");
//     }
    
// }
// year();

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function triangle(a,b,c) {
//     return (a+b+c)/2
// }
// var s = triangle(6,6,6);
// function area(a,b,c) {
//     return s*(s-a)*(s-b)*(s-c)
// }
// document.write("The area of triangle is "+area(6,6,6));


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// var eng = +prompt("Enter Your Marks IN English Out OF 100","0");
// var urdu = +prompt("Enter Your Marks Marks IN Urdu Out OF 100","0");
// var math = +prompt("Enter Your Marks Marks IN Math Out OF 100","0");

// function percent(eng,urdu,math) {
//     return (eng+urdu+math)/300*100
// }

// function avr(eng,urdu,math) {
//     return (eng+urdu+math)/3
// }
// function main() {
//     document.write("Marks obtained in English out of Hundred is : "+eng+"<br>"+"Marks obtained in Urdu out of Hundred is : "+urdu+"<br>"+"Marks obtained in Math out of Hundred is : "+math+"<br>"+"Average marks obtained in three subjects is : "+avr(eng,urdu,math)+"<br>"+"Percentege in all subjects is : "+percent(eng,urdu,math));
// }
// main()
