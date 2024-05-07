#! /usr/bin/env node

import inquirer from "inquirer";


// step 1: MAKE VAEIABLE AND TAKING INPUT FROM USER:


const quiz:{
    quest: string;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
    q5: string

    //question 1

} = await inquirer.prompt([{
    name: "quest",
    type: "input",
    message: "Enter your name!"

},
    
    
{
    name: "q1",
    type: "list",
    message: "Q1. For how many days test match scheduled?",
    choices: ["a: 50 overs","b: four days","c: 90 overs","d: five days"]
},

    //question 2

{
    name: "q2",
    type: "list",
    message: "Q2. Who is the captain of pakistan cricket team for T20 WC 2024?",
    choices: ["a: sarfaraz ahmed","b: babar azam","c: shaheen shah afridi","d: muhammad rizwan"]
},

    //question 3

{
    name: "q3",
    type: "list",
    message: "Q3. Who was the captain of pakistan cricket when pakistan won champions trophy?",
    choices: ["a: sarfaraz ahmed","b: babar azam","c: muhammed hafeez","d: younis khan"]
},

    //question 4

{
    name: "q4",
    type: "list",
    message: "Q4. Who was the winner of cricket world cup 2019? ",
    choices: ["a: australia","b: newzealand","c: india","d: england"]
},

    //question 5

{
    name: "q5",
    type: "list",
    message: "Q5. Which country to host T20 WC 2024?",
    choices: ["a: south africa","b: USA and west indies","c: india and bangladesh","d: england and walves"]
},


])


// step 2: ANSWERS

    //ans 1

let score = 0;
switch(quiz.q1){
     case "d: five days":
       console.log("Correct!");
        ++score;
        break;
        default:
            console.log("Incorrect!"); 
    }

        //ans 2

    switch(quiz.q2){
        case "b: babar azam":
          console.log("Correct!");
           ++score;
           break;
           default:
               console.log("Incorrect!"); 

           //ans 3

       }
       switch(quiz.q3){
        case "a: sarfaraz ahmed":
          console.log("Correct!");
           ++score;
           break;
           default:
               console.log("Incorrect!"); 


           //ans 4
       }
       switch(quiz.q4){
        case "d: england":
          console.log("Correct!");
           ++score;
           break;
           default:
               console.log("Incorrect!"); 

          //ans 5

       }
       switch(quiz.q5){
        case "b: USA and west indies":
          console.log("Correct!");
           ++score;
           break;
           default:
               console.log("Incorrect!"); 
       }


// step 3: FINAL SCORE:

console.log(`${quiz.quest} Your score is ${score} out of 5:`);







