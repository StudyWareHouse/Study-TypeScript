function greeter1(person: any) {
    return "Hello, " + person;
}

let user1 = "Jane User";
document.body.innerHTML = greeter1(user1);