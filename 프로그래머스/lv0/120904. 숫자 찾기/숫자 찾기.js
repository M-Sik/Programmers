function solution(num, k) {
    const answer = num.toString().indexOf(`${k}`) + 1;

    return answer !== 0 ? answer : -1;
}