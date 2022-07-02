const add = (n1: number, n2: number, showResult: boolean, msg: string) =>{
    
    let result= n1 + n2;
    
    if(showResult)
    {
        // console.log(msg, n1 + n2);
        console.log(msg + result);
    }
    else
    {

        return result;
    }

}
const number1 = 5;
const number2 = 2.8;
const Printresult = true;
const Resultmsg = 'Result is: ';

// const result = add(number1, number2, Printresult);
// console.log(result);
add(number1, number2, Printresult, Resultmsg);