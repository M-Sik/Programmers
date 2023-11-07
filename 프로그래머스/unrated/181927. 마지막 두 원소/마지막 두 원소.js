function solution(num_list) {
    let answer = [];
    const firstNum = num_list.pop();
    const secondNum = num_list.pop();
    const lastNum = firstNum > secondNum ? firstNum - secondNum : firstNum * 2;
    
    num_list.forEach((v) => {
        answer.push(v);
    })
    
    answer.push(secondNum);
    answer.push(firstNum);
    answer.push(lastNum);
    
    return answer;
}