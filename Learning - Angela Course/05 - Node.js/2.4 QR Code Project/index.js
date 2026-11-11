/* 
    === Instructions ===
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer"
import qr from "qr-image"
import fs from "node:fs";

// 1. Working with inquirer to get the URL from the user.
const answers = await inquirer.prompt([
    // questions
    {
        type : "input", // the Type of question
        name : "URL", // Property name 
        message : "Enter the URL" // Display the question to the user
    }
])

console.log(answers) // answers is an object
console.log(answers.URL) // access the URL property


// 2. Working with qr-image package to generate the QR code.

const qr_image = qr.image(answers.URL, { type : "png" });
qr_image.pipe(fs.createWriteStream("qr_image.png"));

// 3. Create a file to save the user input
fs.writeFile("message.txt",answers.URL, (err)=> {
    if (err)  {
        console.log("Error saving the URL :", err);
        return;
    };
    console.log("The file has been saved successfuly !!")
} )
