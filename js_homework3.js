const prompt = require("prompt-sync")(); // Library connection

function pow(x,y)
{
    let result = x;
    for(let i=1; i<y; i++)
    {
        result *= x;
    }
    console.log(`Result: ${x} to the power of ${y} = ${result}`);
}
let messageNumber = "Enter a number:";
let x = Number(prompt(messageNumber));
let messagePower = "Enter a power:";
let y = Number(prompt(messagePower));
pow(x,y); //Calling the function for raising a number to a power