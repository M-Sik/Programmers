function solution(numbers, direction) {
    let answer = []
    if(direction === "right") {
        answer = numbers.map((item, index) => {
            if(index === 0) return numbers[numbers.length - 1]
            else return numbers[index - 1]
        });
    } else {
        answer = numbers.map((item, index) => {
            if(index === numbers.length - 1) return numbers[0]
            else return numbers[index + 1]
        });
    }
    
    
    
    return answer;
}