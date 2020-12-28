'use strict';

var YourName = prompt("Whats your name please :)");

document.getElementById("WelcomeMassage").innerHTML =  YourName;


//First Question

var UserInput = prompt("Do you think my name is Yazan type Yes / No");

if (UserInput.toLowerCase() ==='yes' || UserInput.toUpperCase() === 'YES') {
    alert("Sure My Name Is Yazan Welcome Bro :)")
    console.log('My Name Is Yazan');
} else {
    alert("Sorry isnt Correct , My Name is Yazan :(");
    console.log('Sorry isnt Correct :(');
}
//Second Question
var UserAge = prompt("Do you think my Age is 27 type Yes / No");

if (UserAge.toLowerCase() ==='yes' || UserAge.toUpperCase() === 'YES') {
    alert("Sure My Age Is 27 Years Old Welcome Bro :)")
    console.log('My Age Is 27 Years Old');
} else {
    alert("Sorry isnt Correct ,my Age Is 27 Years Old :(");
    console.log('Sorry isnt Correct my  Age Is 27 Years Old:(');
}

//Third Question
var UserJob = prompt("Do you think my Job is Software Developer type Yes / No");

if (UserJob.toLowerCase() ==='yes'|| UserJob.toUpperCase() === 'YES') {
    alert("Sure My Job is Software Developer Welcome Bro :)")
    console.log('My Job is Software Developer');
} else {
    alert("Sorry isnt Correct ,My Job is Software Developer :(");
    console.log('Sorry isnt Correct my  Job is Software Developer :(');
}

//Fourth Question
var UserLocation = prompt("Do you think my Location is Irbid type Yes / No");

if (UserLocation.toLowerCase() ==='yes' || UserLocation.toUpperCase() === 'YES') {
    alert("Sure My Location is Irbid Welcome Bro :)")
    console.log('Location is Irbid');
} else {
    alert("Sorry isnt Correct ,My Location is Irbid :(");
    console.log('Sorry isnt Correct My Location is Irbid :(');
}


alert("Welcome Bro " + YourName);