function perfectSquare(n) {
    const sqrtN = Math.sqrt(n);
    if (Number.isInteger(sqrtN)) {
        const nextPerfectSquare = Math.pow(sqrtN + 1, 2);
        return nextPerfectSquare;
    } else {
        return -1;
    }
}    


console.log(perfectSquare(9));