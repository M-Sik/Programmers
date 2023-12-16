function solution(todo_list, finished) {
    const answer = [];
    
    todo_list.forEach((v, i) => {
        !finished[i] && answer.push(v);
    })
    
    return answer;
}