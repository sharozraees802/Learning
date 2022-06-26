// const person:object = {
//     name: 'Max',
//     age: 30
// }
// console.log(person);

const person:{
    name: string,
    age: number
    // hobbies: Array<string>
    hobbies: string[]
    role: [number, string] // [number, string] this tuples type
    // role: (number|string)[] // [number, string] this tuples type
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}
console.log(person.name);

for(const hobi of person.hobbies)
{
    console.log(hobi.toUpperCase());
}