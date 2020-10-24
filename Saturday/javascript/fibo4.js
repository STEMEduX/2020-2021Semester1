function fibo(n) {
    if (n === 0) {
        return n;
    }

    let last = 0;
    let next = 1;

    for (let i = 1; i < n; i++) {
        let temp = last;
        last = next;
        next = last + temp;
    }
    return next
}


for (let x = 0; x < 20; x++) {
    console.log(x, fibo(x));
}
console.log(fibo(20)) //6795