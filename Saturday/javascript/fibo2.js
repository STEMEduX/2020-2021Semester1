
let memo = {};
function fibo(n) {
    console.log('calculating fibo: ', n);
    if (n < 2) {
        return n;
    }
    
    if (n in memo) {
        return memo[n];
    }
    memo[n] = fibo(n-1) + fibo(n-2);
    return memo[n]
}

console.log(fibo(20)) //6795