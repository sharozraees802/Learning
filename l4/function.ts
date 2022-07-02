// function retun type


function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printValue(num: number) {
    console.log(num);
}

function undPrintValue(num: number):undefined {
    console.log(num);
    return
}

printValue(add(5, 12));
undPrintValue(add(5, 12));
console.log("🚀 ~ file: app.ts ~ line 18 ~ undPrintValue(add(5, 12));", undPrintValue(add(5, 12)))


// funtions as type


let combineValue: (a: number, b: number) => number;

combineValue = add;

// combineValue= printValue;

console.log("🚀 ~ file: app.ts ~ line 29 ~ combineValue", combineValue(2,3))


// Functions types and callback

function addHandler(n1:number,n2:number,cb:(num1:number)=> void)
{
    const result = n1 + n2;
    cb(result);
}

addHandler(10,20,(result)=>{
    console.log(result);
})