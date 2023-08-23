function solution(s) {
    answer = s.split(" ").reduce((acc, cur, index) => {
        if(cur === "Z") {
            return acc - Number(s.split(" ")[index - 1]);
        } else {
            return acc + Number(cur);
        }
    }, 0)
    return answer;
}