function solution(a, b) {
    const answer = new Date(2016, a-1, b);

    return answer.toString().substr(0, 3).toUpperCase();
}