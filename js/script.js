'use strict';
let CountNum = 0;
var YourName = prompt("Whats your name please :)");
CountNum++;
document.getElementById("WelcomeMassage").innerHTML =  YourName;


//First Question

var UserInput = prompt("Do you think my name is Yazan type Yes / No");

if (UserInput.toLowerCase() ==='yes' || UserInput.toUpperCase() === 'YES') {
    alert("Sure My Name Is Yazan Welcome Bro :)")
    console.log('My Name Is Yazan');
    CountNum ++;
} else {
    alert("Sorry isnt Correct , My Name is Yazan :(");
    console.log('Sorry isnt Correct :(');
}
//Second Question
var UserAge = prompt("Do you think my Age is 27 type Yes / No");

if (UserAge.toLowerCase() ==='yes' || UserAge.toUpperCase() === 'YES') {
    alert("Sure My Age Is 27 Years Old Welcome Bro :)")
    console.log('My Age Is 27 Years Old');
    CountNum++;
} else {
    alert("Sorry isnt Correct ,my Age Is 27 Years Old :(");
    console.log('Sorry isnt Correct my  Age Is 27 Years Old:(');
}

//Third Question
var UserJob = prompt("Do you think my Job is Software Developer type Yes / No");

if (UserJob.toLowerCase() ==='yes'|| UserJob.toUpperCase() === 'YES') {
    alert("Sure My Job is Software Developer Welcome Bro :)")
    console.log('My Job is Software Developer');
    CountNum++;
} else {
    alert("Sorry isnt Correct ,My Job is Software Developer :(");
    console.log('Sorry isnt Correct my  Job is Software Developer :(');
}

//Fourth Question
var UserLocation = prompt("Do you think my Location is Irbid type Yes / No");

if (UserLocation.toLowerCase() ==='yes' || UserLocation.toUpperCase() === 'YES') {
    alert("Sure My Location is Irbid Welcome Bro :)")
    console.log('Location is Irbid');
    CountNum++;
} else {
    alert("Sorry isnt Correct ,My Location is Irbid :(");
    console.log('Sorry isnt Correct My Location is Irbid :(');
}




//LAB 3 Code Here

var myNumberGuss = parseInt(prompt("Please guessing a number from 1 to 10 you have Four opportunities", ""));
for (let index = 1; index <= 4; index++) {
  
    if (myNumberGuss >= 1 && myNumberGuss <= 9) {
       
        alert("Too Low");
        console.log("Too Low "+myNumberGuss);
        
    }else if (myNumberGuss ===10){
    
        alert("Too High");
        console.log("Too High "+myNumberGuss);
        CountNum++;
    
    }
    myNumberGuss = parseInt(prompt("Please guessing a number from 1 to 10", ""));
}
alert("My guessing number is 10");



var myFruit = ["Apples", "mangoes"];


var myFavuoritFruit = prompt("Please Guess which my two favourite fruit  choose one please you have 6 attempts (Apples /oranges / mandarins/ mangoes /Banana/ kiwifruit)");

for (let index = 0; index < 5; index++) {
   
    if(myFavuoritFruit ===myFruit[0] ||myFavuoritFruit ===myFruit[1]){

        alert("You have nice luck" + myFavuoritFruit);
        console.log(" nice luck "+myFavuoritFruit);
        CountNum++;
        break;
    }
    else{
        alert("Try Again Please");
        console.log(" bad luck "+myFavuoritFruit);
    }
    myFavuoritFruit = prompt("Please Guess which my two favourite fruit  choose one please you have 6 attempts (Apples /oranges / mandarins/ mangoes /Banana/ kiwifruit)");
}

alert("Your Score is "+ CountNum + " From 7 :)" );
alert("Welcome Bro " + YourName);

