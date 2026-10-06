// Assigment N°01 
function timeLeftToDie(age) {
    var timeLeft = 90 - age;
    var months = timeLeft * 12;
    var weeks = timeLeft * 52;
    var days = timeLeft * 365;
    console.log("You have " + days + " days , " + weeks + " weeks , and  " + months + " months left.")

}  

// Assigment N°02
function bmiCalculator(weight, height){
    var BMI = weight / (height * height);
    return Math.round(BMI)
}

// var BMI = bmiCalculator(65, 1.8);
// console.log(BMI);

//Assigment N°03
function loveCalculator(){
    var lovePourcentage = Math.random();
    lovePourcentage = lovePourcentage * 100
    lovePourcentage = Math.floor(lovePourcentage) + 1;
    return lovePourcentage;
}

// console.log("Your love pourcentage is " + loveCalculator() + "%");


// Assigment N°04
function LeapYear(year) {
    if ( (year%4 === 0) && (year%100 === 0) && (year%400 === 0)) {
            console.log("It's a leap Year !")
    }
    else {
        console.log("It's not a leap year !")
    }
}
// LeapYear(2000)


// Assigment N°05
function DoesItExist(guestList, guestName){
    if (guestList.includes(guestName)){
        return true
    }else {
        return false
    }
}

// var guestList = ["Najwa", "Yassine", "Mohamed", "Ahmed", "Mariem", "Nour", "Sarra"];
// var guestName = prompt("What is your name ?");
// if (DoesItExist(guestList,guestName)){
//     console.log("Welcome to the party");
// }
// else {
//     console.log("Sorry, Your're not invited to this party. Maybe next time !")
// }

// Assigment N°06
function fizzBuzz()  {
    if (output.length == 0) {
        output.push(1)
    }
    else {
        nextNumber = output[output.length - 1] + 1
        output.push(nextNumber);
    }
    console.log(output)
}
// var output = [];
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();



// =======================
// Assigment N°07
function whoIsGoingToPay(names) {
    var randomNamePosition = Math.random() * names.length;
    randomNamePosition = Math.floor(randomNamePosition);
    return names[randomNamePosition] + " is going to buy lunch day ! ";
}

// var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
// console.log(whoIsGoingToPay(names));


// Assigment N°08
function fibonacciGenerator(n){
    fibList[0] = 0;
    fibList[1] = 1;
    for (var i = 2 ; i<n ; i++) {
        nextNumber = fibList[i-1] + fibList[i-2];
        fibList.push(nextNumber);
    }
    return fibList;
}

var fibList = [];
console.log(fibonacciGenerator(100))
