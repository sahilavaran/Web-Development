// console.log("Hello"); /*to print*/
// console.log("I like pizza"); 

// window.alert("this is an alert");  /*to create an alert*/
// window.alert("i like pizza")
// document.getElementById("myH1").textContent ="hello";
// document.getElementById("myP").textContent ="i like pizza";


// this is a comment

/*tykulkj8*/
//////////////////////////////////////////////////////

// variables = a conatiner that stores a value. Behaves as if it were the value it contains.

// declaration let x;
// assignment x = 100;
// let y = 123;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(typeof gpa);
// console.log(`you are ${age} years old`);
// console.log(`the price is ${price} `);
// console.log(`your gpa is j${gpa}`);

// // diffrent data types
// // strings = a string is a series of character 

// let firstName = "sahil";
// let favouriteFood = "pizza";
// let email ="sahil.avaran321@gmail.com";

// console.log(firstName);
// console.log(`yiur like ${favouriteFood}`);
// console.log(`my email is ${email}`);

// // Booleans either true or false
// let forSale = true;
// let online = true;
// let isStudent = true;

// console.log(`bro is online ${online}`);
// console.log(`is this car for sale ${forSale}`);
// console.log(`enrolled: ${isStudent}`);

// let fullName ="sahil avaran";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `enrolled: ${isStudent}`;
/////////////////////////////////////////////////////

// ARITAMATIC OPERATORS = Operands(values, variables, etc.)
                        //  operators (+ - * /)
                        // ex 11 = x =5;  

// let students =30;

// students = students + 1;
// students = students -1;
// students = students * 2;
// students = students/2;
// students = students ** 2; /*this is the power*/                 

// below is the easiest way to use the arithamatic
// students += 1;  
// students -= 1;
// students *= 2;
// students /=2;
// students **=2;
// students %=2;

// // increment and decrement below
// // students ++;

// console.log(students); 

//////////////

// OPERATOR PRECEDENCE
//1. parenthesis ()
//2. exponents 
// 3. multiplications and divisions and modulo
// 4. addition and subtraction

// let result = 1+ 2 * 3 + 4 ** 2;

// console.log(result);

// // lets try another one below
// let results = 12 % 5 + 8/2;

// console.log(results);
///////////////////////////////////////////////////////

// HOW TO ACCEPT USER INPUT

// 1. EASY WAY = Window Prompt
// 2. PROFESSIONAL WAY = HTML textbox


// (below is the EASY WAY)
// let username;
// username = window.prompt("whats your user name");            

// console.log(username);

//2. (Lets have a look at  the  professional way)
// let username;
// document.getElementById("mySubmit").onclick = function(){
// username = document.getElementById("myText").value;
// console.log(username);
// // welcome ulla h1 maari hello endhanno usernmae adh veran ulladh lets check below
// document.getElementById("myH1").textContent = `hello ${username}`;
// }

// ////////////////////////////////////////

// TYPE CONVERSION = That means datatypes angotu, engottum change cheyynadh ann (strings, numbers, booleans) idh okke.

// let age = window.prompt("how old are you");


// age = Number(age);
// age+=1;
// console.log(age, typeof age);

/////

// let x = "0";
// let y = "0";
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);



// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

/////////////////////////////////////////////////

// CONST = A variable that cant be changed once you assigned them.
// mattan kayyula once const parnja koduthal adh oru variable ann
// const pi = 3.14159;
// let radius;
// let circumference;


// document.getElementById("mySubmit").onClick = function(){
//     document.getElementById("myText").value;
//     radius = Number(radius typeof radius);
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference;
// }

//////////////////////////////////////////////////

// Math = built-in object that provides a collection of properties and methods.

// let x = 3.21;
// let y = 2;
// let z;

// // z = Math.round(x);
// // z = Math.floor(x);   (floor always rounds down)
//  // z = Math.ceil(x);   (rounds to the higher number)
// //  z = math.trunc(x);  (idh decimals okke opyivakkum)
// // z = math.abs(x); (to find the absalute number)

// // let  max = math.max(x,y,z); (to find the maximum)
// let min = math.min(x,y,z);
// console.log(min);

// /////////////////////////////////////////////

// RANDOM NUMBER GENERATOR


// const max = 100;
// const min =50;

// let randomNum = Math.floor(Math.random() *(max - min)) + min;
// console.log(randomNum);

// //////////////////////////////////////////

//IF STATEMENTS = if a condition is true, execute some code if not,  so semthing else

// let age =13;

// if(age >= 18){
//     console.log("You are old enough to enter this place")
// }
// else{
//     console.log("you must be 18+ to enter the place")
    
// }

// ///

// let time =14;
// if(time < 12){
//     console.log("goodmorning")
// }
// else{
//     console.log("good afternoon")
// }

// ///

// let isStudent = false;

// if(isStudent){
//     console.log("you are a student")
// }
// else{
//     console.log("you are not a student")
// }

////NESTED IF STATEMENTS

// let ages =25;
// let hasLicence = false;

// if(ages >= 16){
// console.log("you are old enough to drive")
// if(hasLicence){
//     console.log("You have licence")
// }
// else{
//     console.log("you dont have a license yet")
// }
// }
// else{
//     console.log("you are not old enough to drive")
// }

///
//ELSE IF STATEMNETS
// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement =document.getElementById("resultElement");

// mySubmit.onclick = function(){
//     let age ;
//     age = myText.value;

//     age = Number(age);
//     if(age >= 100){
//         console.log("you are too old to enter")
//         resultElement.textContent = `you are too old to enter`
//     }
//     else if(age>=18){
//         console.log("you are old enough to enter");
//         resultElement.textContent = `you are old enough to enter`
//     }
//     else if(age == 0){
//         console.log("you cant enter yiu are just born");
//         resultElement.textContent =`you cant enter yiu are just born`
//     }
//     else if(age < 0){
//         console.log("your age cant be below zero");
//         resultElement.textContent = `your age cant be below zero`
//     }
//     if(age >= 100){
//         console.log("you are too old to enter");
//         resultElement.textContent = `you are too old to enter`
//     }
//     else{
//         console.log("you are not old enough to enter "); 
//         resultElement.textContent = `you are not old enough to enter`
//     }
    
// }

// //////////////////////////////////////////////////////////////////

//  .checked = property that determines the checked sate of an 
            //   HTML checkbox or radio button element.

            






