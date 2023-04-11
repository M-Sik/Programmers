function solution(s) {
    var answer = [...s].sort((a, b) => {
        if(a > b) return -1;
        else if (a === b) return 0;
        else return 1;
    }).join("");
    return answer;
}