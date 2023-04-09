function solution(arr) {
    const answer = arr.filter((item) => item !== Math.min(...arr));
    return answer.length === 0 ? [-1] : answer;
}