function fibo(n) {
    // console.log('calculating fibo: ', n);
    if (n < 2) {
        return n;
    }
    return fibo(n-1) + fibo(n-2);
}

// for (let x = 0; x < 20; x++) {
//     console.log(x, fibo(x));
// }
console.log(fibo(20)) //6795