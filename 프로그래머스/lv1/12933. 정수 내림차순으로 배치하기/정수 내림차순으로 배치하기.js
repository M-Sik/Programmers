function solution(n) {
    const answer = [...n.toString()].sort((a, b) => b - a).join("");
    return parseInt(answer);
}