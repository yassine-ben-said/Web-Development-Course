// =====  Test N°01  ====
let name = "Yassine";
let age = 22;

// console.log(22/10);

// ====  Higher Order Functions ==== 

function add(num1, num2) {
    return num1+num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function substraction(num1, num2){
    return num1-num2;
}

function calculator(num1, num2, operator){
    return operator(num1,num2);
}

console.log(calculator(2,3,add));


//  ==== Create Objects ====

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

let houseKeeper1 = new HouseKeeper(13, "Bella", ["Bathroom","bedroom"]);
console.log(houseKeeper1);
console.log(houseKeeper1.yearsOfExperience);
console.log(houseKeeper1.name);
console.log(houseKeeper1.cleaningRepertoire);