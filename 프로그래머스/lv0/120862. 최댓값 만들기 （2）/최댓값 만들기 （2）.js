function solution(numbers) {
    const answer = numbers.sort((a, b) => b - a);
    const length = answer.length
    return answer[length-1] * answer[length-2] > answer[0] * answer[1] ?
        answer[length-1] * answer[length-2] : 
        answer[0] * answer[1] ;
}