function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    if (n == 2) {
        return 2;
    }

    var res = 1;
    for (var i=n; i>0; i--) {
        res *= i;
    }

    return res;
}

function getSummFact(n) {
    var sum = 0;

    n = n.toString();

    for (var i=0, len=n.length; i<len; i++) {
        sum += factorial(+n[i]);
    }

    return sum;
}

// function findFactorions() {
//     // n-значное число не меньше 10^n-1, но 10^7 < 8*9!. Соответсвенно, искомые числа не больше 7*9! = 2540160
//     for (var i=1; i<=2540160; i++) {
//         if (i == getSummFact(i)) console.log(i);
//     }
// }
