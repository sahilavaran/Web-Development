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

/////////////////////////////////////////////
