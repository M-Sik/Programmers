function solution(numbers) {
    var answer = numbers.reduce((acc, cur) => acc + cur) / numbers.length;
    return answer;
}