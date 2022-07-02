
enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Role1 { ADMIN="ADMIN", READ_ONLY=1, AUTHOR="READ_ONLY" };

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    role1: Role1.ADMIN
}

if (person.role === Role.ADMIN) {
    console.log('is admin');
}

//  type anyin typescript use any kind of data we use we have no idea return value is string,number anything use a any but this is not good type use