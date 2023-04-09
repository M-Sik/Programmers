function solution(absolutes, signs) {
    const answer = signs.reduce((acc, cur, index) => {
       const num = cur ? absolutes[index] : -absolutes[index]
       return acc + num
    }, 0);
    return answer;
}