function solution(n) {
    var answer = [];
    let num = 2;
    
    while(n !== 1) {
        if(n % num == 0) {
            answer.push(num);
            n = n / num;
        } else {
            num += 1;
        }
        // console.log(n, num, answer)
    }
    return [...new Set(answer)];
}