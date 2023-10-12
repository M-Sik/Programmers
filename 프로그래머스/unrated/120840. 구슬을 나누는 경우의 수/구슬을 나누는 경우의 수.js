function solution(balls, share) {
    var answer = factorial(balls)/(factorial(balls - share) * (factorial(share)));
    console.log(answer);
    return Math.round(answer);
}

const factorial = (num) => {
    let factNum = 1;
    for(let i=2; i<=num; i++) {
        factNum *= i;
    }
    return factNum;
}