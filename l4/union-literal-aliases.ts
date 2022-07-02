// union types

// function combine (input1: number | string, input2: number | string) {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number') {
//         result = input1 + input2;
//     }
//     else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// const combineAge = combine(30, 5);
// console.log("🚀 ~ file: app.ts ~ line 7 ~ combineAge", combineAge)

// const combineName = combine("Max", "Anna");
// console.log("🚀 ~ file: app.ts ~ line 10 ~ combineName", combineName)


// literal types


// function combine (input1: number | string, input2: number | string, typeconversion: 'as-number' | 'as-text') {
//     let result;
//     if (typeof input1 === 'number' && typeof input2 === 'number' || typeconversion === 'as-number') {
//         result = +input1 + +input2;
//     }
//     else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// const combineAge = combine(30, 5, "as-number");
// console.log("🚀 ~ file: app.ts ~ line 7 ~ combineAge", combineAge)

// const combineAgestring = combine('30', '5', "as-number");
// console.log("🚀 ~ file: app.ts ~ line 7 ~ combineAge", combineAgestring)

// const combineName = combine("Max", "Anna" , "as-text");
// console.log("🚀 ~ file: app.ts ~ line 10 ~ combineName", combineName)


// Aliases type

type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
function combine (input1: Combinable, input2: Combinable, typeconversion: ConversionDescriptor) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || typeconversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAge = combine(30, 5, "as-number");
console.log("🚀 ~ file: app.ts ~ line 7 ~ combineAge", combineAge)

const combineAgestring = combine('30', '5', "as-number");
console.log("🚀 ~ file: app.ts ~ line 7 ~ combineAge", combineAgestring)

const combineName = combine("Max", "Anna" , "as-text");
console.log("🚀 ~ file: app.ts ~ line 10 ~ combineName", combineName)