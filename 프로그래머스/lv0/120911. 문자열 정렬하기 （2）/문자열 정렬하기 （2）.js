function solution(my_string) {
    var answer = [...my_string].map((item) => item.toLowerCase()).sort().join("");
    return answer;
}