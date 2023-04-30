function solution(array, budget) {
    let answer = 0;
    let sum = 0;
    
    array.sort((a, b) => a - b).forEach((num) => {
        sum += num;
        sum <= budget && answer++;
    })
    
    return answer;
}