# Home work highlights

## Logical Operator
* `&&` means AND.
* `||` means OR.
* `!` means NOT.

## `>=` and `<=`
* `time > 10 || time == 10` can be `time >= 10` for brief
* `<=` less or equal

## To verify, put it into a function and test it.

```JavaScript
function getGreeting(hours) {
  var greeting; //local scope
  if (hours < 10) {
    greeting = "Good morning";
  };  
  if (hours < 20 && hours >= 10) {
    greeting = "Good day";
  };
  if (hours >= 20) {
    greeting = "Good evening";
  };
  return greeting;
}

for (var h = 0; h<24; h++ ) {
  console.log(h, getGreeting(h));
}
console.log("final", h) //24, h in global scope
```
## Variable Scope
see https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/20201010.md#variable-scope
## Difference  `var`, `let` and `const`
see https://github.com/STEMEduX/2020-2021Semester1/blob/master/Saturday/javascript/20201010.md#difference-var-let-vs-const


