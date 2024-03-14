console.log("hello world");

document.write("<h1>javascript</h1>");  
// the above function is to write in instead of writing in html

// variables and data types

//string variable for text
// var person = "john";
// let person1 ="smith";
// document.write(person);
// document.write("<br>");
// document.write(typeof person);

// Number
// var number1 =10;
// var number2 =11;
// document.write(number1);
// document.write("<br>");
// document.write(typeof number1 + "<br>");


// boolean
// var js = true;
// var html = false;

//undefined
// var text1;

// null
// var text2 = null;   // null aay value ann

// //String
// var person ="john";
// document.write(person + "<br>");

//const   (idh once declare cheyydhal pinne change cheyyan kayulla)

// Arithamtic operators
// all basic mathematic operators

// var a = 10;
// var b = 20;

// document.write(a+b);

// modulus operator (10*3 = 1 the remaining one is the moduls/ and we use % sign)

// ////////////////////////////////////////

//  INCREMENT opertror (++) to add something
// decremnet operator (--) to subtract

//  lets try increment
// var a =20;
// a++; a=a+1; (thulyam ann)

/////////////////////////////////////////////

// //  Below lets check dectremnet
// var a = 20;
// a--;

///////////////////////////////////////

// document.write(a);

// exponentation
// var a = 20;
// document.write(10 ** 3);

// ////////////////////////////////////
// ASSIGNMENT OPERATORS

// first one is assign (=)

// var sahil = 11;
// document.write(sahil +"<br>");

// // ee equal to kodukubadhine anne assign cheyya 

// // Add and Assign(+=)
// var sahil = 11;
// var result = sahil +=4;
// document.write(sahil + "<br>");  //apo evde output 15 kittum

// // (-=)
// var sahil = 11;
// var result = sahil -=4;
// document.write(sahil);        //evde minus aavum 

// // Multipy and assign(*=)
// var sahil = 11;
// var result = sahil *=4;
// document.write(sahil);  //evde multiply cheyyan

// // Divide and assign
// var sahil =10;
// sahil /= 4; 
// document.write(sahil);  //evde 2.5 kittum

// Modulus and Assign(%=)
// var sahil =10;
// sahil %= 4; 
// document.write(sahil); // evde output 2 kittum

// ///////////////////////////////////////////////

// //COMPkpo evde true varum but avde data type mariyal false aavum

// Not Equal to operator (!=);  / that means idh randum thulyam alla check cheyyuna operator ann

// var avaran =20;
// var sahil =20;  
// document.write(avaran != sahil);

// // GREATER THAN OPERATOR  (>)

// var avaran =24;
// var sahil =22;  
// document.write(avaran > sahil);

// // Greater than or equal to >=
// var avaran =22;
// var sahil =22;  
// document.write(avaran >= sahil +"<br>");


////////////////////////////////////////////////////////

// logical operators
// (onnil kooduthal comparison opertors use cheyydhitulla combine cheyyan kayyum) 

 // 1 Logical &  (if both statements are true idhinte resultum true aavum) (&&)

//  var a =10;
//  var b =20;

//  document.write(a==10 && b==20);

// //  2 Logical or  (if one of the statement is true, result will be  true) (||)

// var a =10;
//  var b =20;

//  document.write(a==10 || b==120);

// //  3 logical not

// var a =10;
//  var b =20;

//  document.write(!(b == 200));  


// ////////////////////////////////////////////////////////

// IF STATEMENT - CONDITIONAL STATEMENT

// CONDITION -> TRUE -> ECEXUTE THE CODE
//Basic structure = 

// if(condition){
//    executes;
//}

// var a = 0;
// if(a >0){
//     document.write("positive number")
// }else if(a < 0){
//     document.write("negative number")
// }else{
//     document.write("zero")
// }

// /////////////////////////////////////////////////

//SWITCH STATEMENT = IF OKKE polea thannea conditional statement ann. ee adiyil varunadh okke ooro possiblities ann those cases.
// Basic structure =

/* switch(expression){
case 1:
    code1;
    break;
    case2;
    code2;
    break;
 case3;
    code3;
    break;
default:   //oru casum match aayi ilyankkil evde default aayi    koduthadh varum
    code defaults;
    break;
}*/


// var a = "B";
// switch(a){
// case "A":
//     document.write("apple");
//     break;
//     case "B":
//         document.write("basketball");
//         break;
//         case "C":
//             document.write("cat");
//             break;
//             default:
//                 document.write("invalid cahracter")
//                 break;
// }

// ////////////////////////////////////////////////////////

//LOOPS = NAMMALA NISCHINDHA CONDITION VAREA Programming run cheyydhu kondu nilkan use cheyyuna oru sadanam ann loops.

// document.write("hello" + "<br>");
// document.write("hello" + "<br>");
// document.write("hello" + "<br>");
// document.write("hello" + "<br>");
// document.write("hello" + "<br>");

// forloop
// 1 variable initialization ann ->2 condition check ->3 condition true annagil for loopil koduthitulla forloop run aavum ->4 pinne update counter /variable value kittum ->5 once its false loop ends
// for(var i = 1; i<=10; i++){
//     document.write("hello" +"<br>");
// }

// // if i want to get a number from 10 to 15

// for(var i =10; i<=15; i++){
//     document.write(i + "<br>");
// }

// ////////////////

//WHILE Loop
// 1-> check condition 2-> if its true conditionil ullil ulla code run avunnu 3-> once falls aayal loop ends

// var i =1;
// while(i<=5){
//     document.write(i +"<br>");
//     i++;
// }

// // now what if we want to get a number from 10 to 1

// var i =10;
// while(i>=1){
//     document.write(i + "<br>");
//     i--;
// }

// /////////////////////////////////////
// doWHILE loops
// ithil nammal aadhyam code run cheyyunnu -> Then condition check cheyyunnu

// var i = 1;
// do{
//     document.write("hello" + "<br>");
//     i++;
// }while(i<=5);

// /////////////////////////////////////////////////

//FUNCTIONS = TO DO A SPECIFIC TASK (There are 2 types of functions inbuilt and user defined functions)

//(INBUILT FUNCTIONS EXAMPLES BELOW)
// document.write()
// ALERT
//typeof

////////////////////////

//USER DEFINED Functions (oru programmer thante programminu vendi mathram create cheyyuna function ann)

// BASIC STRUCTURE BELOW
/*function function_name(){

}
function_name    (evde function name call cheyyuga nnal mathram display aavollu)

*/


// function greetings(){
//     document.write("goodmorning" +"<br>");
// }
// greetings();

// // aduthadh argument or parameters anagne kodukam

// function greetings(name){  //after greeting () ee bracket ann parameter
//     document.write("goodmorning "+  name + "<br>");
// }
// greetings("sahil" );  //evde ee bracketil ulladh ann argument

// ////////

// lets do a program with function
// function Sum(n1,n2){
//     document.write(n1 + n2);
// }

// Sum(10, 20);

// ////////////

// NOW LETS CHECK THE RETURN VALUE

// function Sum(n1, n2){
// return n1+n2    
// }
// var result= Sum(10, 11);
// document.write(result);

// (when we use the the return we have to call by adding variable)

//////////////////////////////////////////////////////////////

//ARRAYS (Idh oru special type of variable ann. so ee variable use cheyydhittu onnil kooduthal variable store cheyyan kayyum)

var animal = ["lion", "tiger", "cat", "dog"];
document.write(animal[0]);

//index number use cheyydhittu nammuk select cheyyan kayyum each and everyone. first one index number will be 0
document.write(animal[3] +"<br>");

//  Next how to replace a value in the array from lion to elephant

animal[0] ="elephant";0
document.write(animal);

// next ee arrayil ethra element ind ulladh nokkam isung length ulla property use cheyyam

// var x = animal.length;
// document.write(x);

//lets check with the forloop
// for(var i =0; i<x; i++){
//     document.write(animal[i] +"<br>k");
// }

// oru arraylaku anagne pudhiya number element add cheyya nokkam

//1 using index number
animal[5] = "gwagon"
document.write(animal[5]);

//2 next is PUSH anna method use cheyyunna rithi ann
// animal.push("fox");
// document.write(animal);

// Next nammuk oru arrayil ulla element anagane delete cheyyam annu nokkam

//1 First method is SHIFT. SHIFT call cheyyumpo aadhyathe element delete aavunadh ann. 

animal.shift();

// 2 next one is POP method. idh avasanthe element delete cheyyum
animal.pop();
document.write(animal);

//3 next one is splice. idh aavumpo nammuk adhu venamengilum delete cheyyam 

animal.splice(2,1);
document.write(animal);

//4 next one is sort method. idh alpahbetic orderil aaki tharum
animal.sort();
document.write(animal);

var number = [20, 50, 40, 90, 10];
number.sort();
document.write(number);

// what if i want to add 20 and 90 from array
document.write(number[0] + number[3] + "<br>");

/////////////////////////////////////////////////////////////////////

//STRINGS  strings are sequence of character/


// var text = "sahil"
// document.write(text[0]);
// var name = "avaran";
// some functions related to strings

// 1 charAt - oru index number kodutha lazhijal adhu charcter ann nammuk manasilakam

// document.write(text.charAt(2));

//2 CONCAT - 2 text join cheyyan use cheyyunadh ann

// document.write(text.concat(name));

//3 lower case  capital to small letter
// var firstName = "SAHIL";
// document.write(firstName.toLowerCase());

//4 uppercase lower to capital
// var name = "sahil";
// document.write(name.toUpperCase());

// SLICE kyrachu letters pyivakam from strings

// var text = "learn java script";
// document.write(text.slice(6,10));


// MATH OBJECT

// //1 square root
// var a =100;
// document.write(Math.sqrt(a));

// //2 absalute value
// var a =-100;
// document.write(Math.abs(a));

// //3 maximum/ minimum
// var a =100
// document.write(Math.min(9,22,12));
// // maximum below
// document.write(Math.max(1,2,4,5));

// // power
// document.write(Math.pow(2,2));

// //floor
// var a =5.3
// document.write(Math.floor(a));

// //ceil higher numberilaku roound cheyyunnu
// var a =7.3
// document.write(Math.floor(a));

//round /number round cheyyan use cheyyunadh ann

// var a =7.3
// document.write(Math.round(a));

// (rand) random / random aayi oru number generate cheyyan use cheyyunu
// document.write(Math.random());

// what if we want random number between 1 to 10

// var a = Math.random();
// var rounded =Math.floor(a*10);   //evde idh kodukunadh 10 varea ulladh kittan ann
// document.write(rounded);



// var a = Math.random();
// var rounded = Math.floor(a*100);
// document.write(rounded);


///////////////////////////////////////////////////////////

// (DOM) DOCUMENT OBJECT MODEL

/* JAVA Script uses Dom to acess the html elements

using DOM javascript can= 
change/remove/Create HTML Elements and Attributes.

change the CSS properties

React/create HTML Events.

ACCESSING DOCUMENT OBJECT
1.getEelementById()
2.getElementByName()
3.getElementByTagName()
4.getElementsClassName()
5.CSS Selectors()
*/
// Lets have a look at Get Element By Id

// var a = document.getElementById("HE");
// a.innerHTML = "LEARN JAVASCRIPT";  // TO CHANGE

// a.style.color ="blue";  // TO change the color 

// Get elements By Class Name
// how to acces using javascript

// var a = document.getElementsByClassName("clas");
// console.log(a);
// a[1].innerHTML ="good morning"; //idh oru class aayond nammuk arrayil ulladh polea listinum select cheyyam [] ee brackatil from 0 to what ever
// a[2].style.color = "red";

////////////////////////////////

//DOM  Get elements by Tag Name

// var a = document.getElementsByTagName("p");
// a[0].innerHTML="Chaged Paragraph";

/////////////////////////////////////

//Dom get Elements by Name

// var a = document.getElementsByName("text")[0];
// var b = document.getElementById("head");

// function message(){
//     b.innerHTML = "hello "+ a.value;
// }

/////////////////////

// DOM Get Elements using CSS selectors (QuerySelectorAll)

//below we are looking how we can access through tag name
// var a = document.querySelectorAll("h1");
// a[0].innerHTML ="learn html"
// a[1].style.color = "red";

//below we are looking how we can access through tag name
// var a = document.querySelectorAll(".hclass");
//console.log(a);  //here we are inspecting
// a[0].style.color="red";
// a[1].innerHTML = "learn java";

//below we are looking how we can access through id

// var a = document.querySelectorAll("#head1");
// a[0].innerHTML = "learn HTML";

// Create and remove elements  (idh parnjal avde htmlil onnum ko)

var heading = document.createElement("h1");

function create(){
    heading.innerHTML ="hello world"
}





