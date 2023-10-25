function solution(num_list, n) {
    var answer = [];
    let count = 0

    num_list.forEach((v) => {
        if(count % n === 0) {
            answer.push(v);
        }
        count++;
    })
    
    return answer;
}