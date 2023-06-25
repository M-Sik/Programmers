function solution(cipher, code) {
    var answer = [...cipher].reduce((acc, cur, index) => {
        if((index + 1) % code === 0) {
           return acc + cur
        }
        return acc + ""
    }, "");
    return answer;
}