//string interpolation
let desset = 'cake';
let drink = 'coffee';

let breakfast = 'Breakfast for today: ' + desset + ' and ' + drink;
console.log(breakfast);

let breakfast1 = `Breakfast for today: ${desset} and ${drink}`;
console.log(breakfast1);

let breakfast2 =  `Breakfast for today: 
${desset} 
and 
${drink}`;
console.log(breakfast2);