function solution(my_string, num1, num2) {
    const answer = [...my_string];
    const num1Str = answer[num1];
    const num2Str = answer[num2];
    
    answer[num1] = num2Str;
    answer[num2] = num1Str;

    return answer.join("");
}