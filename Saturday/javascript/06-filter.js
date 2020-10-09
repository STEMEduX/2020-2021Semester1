//filter take a function returns true/false
const arr = [1, 2, 3, 4, 5, 6, 7];

const even1 = arr.filter( function(a) {
    return a % 2 === 0;
});
console.log(even1);

const even2 = arr.filter(a => {
    return a % 2 === 0;
});
console.log(even2);

const even3 = arr.filter(a => a % 2 === 0);
console.log(even3);

const cities = [
    { city: 'edina', state: 'MN', size: 'mid'},
    { city: 'chicago', state: 'IL', size: 'large'},
    { city: 'minnetonka', state: 'MN', size: 'mid'},
    { city: 'madison', state: 'WI', size: 'large'},
    { city: 'minneapolis', state: 'MN', size: 'large'},
];

const mnCities = cities.filter( c => c.state === 'MN');
console.log(mnCities);

console.log('----------');
const largeCities = cities.filter(c=> c.size === 'large');
console.log(largeCities);

console.log('----------');
const mnLargeCities = cities.filter(c=> c.size === 'large' && c.state === 'MN');
console.log(mnLargeCities);
