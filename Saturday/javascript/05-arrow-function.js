function sayHello() {
    console.log("hello, world");
}
sayHello();

let sayHello2 = () => {
    console.log("hello, world");
}
sayHello2();

//with param
function greeting(name) {
    console.log(`${name}, how are you?`);
}
greeting('Tom');

let greeting2 = (name) => {
    console.log(`${name}, how are you?`);
}
greeting2('Tom');

//with params
function sendMessage(to, message) {
    console.log(`Message: ${message} for ${to}`);
}
sendMessage('Tom', 'how is going?');

let sendMessage2 = (to, message) => {
    console.log(`Message: ${message} for ${to}`);
}
sendMessage('Tom', 'how is going?');

//with return value
function area(r) {
    return 3.14 * r * r;
}
console.log(area(3));

let area2 = (r) => {
    return 3.14 * r * r;
}
console.log(area2(3));
