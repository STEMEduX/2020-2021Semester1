function fibo(n) {
    if (n < 2) {
        return n;
    }
    let memo = [];
    memo[0] = 0;
    memo[1] = 1;
    for(let i = 2; i <= n; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n]
}


for (let x = 0; x < 20; x++) {
    console.log(x, fibo(x));
}

console.log(fibo(20)) //6795