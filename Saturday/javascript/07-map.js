const arr = [1, 2, 3, 4, 5, 6, 7];

const square = arr.map(a => a*a);
console.log(square);

function makeACircle(r) {
    return { radius: r, area: 3.14 * r * r, perimeter: 2 * 3.14 * r};
}
const circles = arr.map( a => makeACircle(a));
console.log(circles);

console.log('----------')
const circles2 = arr.map( a => ({ radius: a, area: 3.14 * a * a, perimeter: 2 * 3.14 * a}));
console.log(circles2);