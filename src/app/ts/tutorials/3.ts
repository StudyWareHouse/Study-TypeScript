class Student3 {
    fullName: String;
    constructor (public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person3 {
    firstName: string;
    lastName: string;
}

function greeter3(person: Person3) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user3 = new Student3("Jane", "M.", "User");
document.body.innerHTML = greeter3(user3);