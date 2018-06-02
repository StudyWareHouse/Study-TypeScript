interface Person2 {
    firstName: string;
    lastName: string;
}

function greeter2(person: Person2) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user2 = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter2(user2);