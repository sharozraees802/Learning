// The unknown type

let userInput: unknown;

let userName : string


userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
    
    userName = userInput;
}
    
// The never type

function generatorError(message:string, code:number): never
{
    throw {message:message,errorCode:code};
}
generatorError('An error occurred!',500);