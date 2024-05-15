//<============================TASK 1. Miles-to-Kilometers Converter (Operators)================================>//
/*let miles :number =  130;  // value in miles
const conversionfactor = 1 * 1.60934 // miles to kilometers conversion
let kilometers = miles * conversionfactor
console.log(`The disctance of ${miles} miles is equal to ${kilometers} km`);
*/
//<============================TASK 2. Evaluating a number game================================>//
/*import inquirer from "inquirer";
let userinput = await inquirer.prompt({
    name : "message",
    type : "number",
    message : "Enter your number"
});
let dynamicNo = 6;

if (userinput.message === dynamicNo){
    console.log(`Your given number is equals to dynamic number value`)
}
else if (userinput.message < dynamicNo){
    console.log(`Your given number is less than dynamic number value`)

}
else if (userinput.message > dynamicNo){
    console.log(`Your given number is greater than dynamic number value`)

}
else (console.log("Please input correct value"));*/
//<============================TASK 3. Friend checker game================================>//
/*import inquirer from "inquirer";
let userinput = await inquirer.prompt({
    name : "message",
    type : "input",
    message : "Enter your friend name"
});

switch(userinput.message){
    case "Rizwan":
    console.log(`${userinput.message} is your friend`);
    break;
    case "Shahid":
    console.log(`${userinput.message} is your friend`);
    break;
    case "Haider":
    console.log(`${userinput.message} is your friend`);
    break;
    default:
    console.log(`${userinput.message} is not your friend`)
}*/
//<============================TASK 4. Functions================================>//
/*let num1 = 7
let num2 = 4

function job(num1:number,num2:number){
    return num1*num2
    
}
console.log(job(num1,num2));
console.log(job(4,4))*/
//<============================TASK 5. Calculator project using Functions================================>//
/*let number1 = 8;
let number2 = 9;
let operator = "+";

function result(a:number,b:number,operator:string){
    if
        (operator === "+"){
            return a+b;

    }
    else if(operator ==="-"){
        return a-b;
    }

}
console.log(result(number1,number2,operator))

operator = "-"
console.log(result(45,35,operator))*/
//<============================TASK 6. Anonymous function ===============================>//
/*let greet =function(all:string){
    console.log(all)
}
greet("Happy eid Mubarak")*/
function greet(all) {
    console.log(all);
}
greet("Happy eid Mubarak");
export {};
