const uniqueKey = Symbol();
const uniqueKey2 = Symbol();
let objet = {};

objet[uniqueKey] = 1234;
objet[uniqueKey2] = "secret";

console.log(objet[uniqueKey]);
console.log(objet);