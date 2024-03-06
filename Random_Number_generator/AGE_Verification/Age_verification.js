const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement =document.getElementById("resultElement");

mySubmit.onclick = function(){
    let age ;
    age = myText.value;

    age = Number(age);
    if(age >= 100){
        console.log("you are too old to enter")
        resultElement.textContent = `you are too old to enter`
    }
    else if(age>=18){
        console.log("you are old enough to enter");
        resultElement.textContent = `you are old enough to enter`
    }
    else if(age == 0){
        console.log("you cant enter yiu are just born");
        resultElement.textContent =`you cant enter yiu are just born`
    }
    else if(age < 0){
        console.log("your age cant be below zero");
        resultElement.textContent = `your age cant be below zero`
    }
    if(age >= 100){
        console.log("you are too old to enter");
        resultElement.textContent = `you are too old to enter`
    }
    else{
        console.log("you are not old enough to enter "); 
        resultElement.textContent = `you are not old enough to enter`
    }
    
}
