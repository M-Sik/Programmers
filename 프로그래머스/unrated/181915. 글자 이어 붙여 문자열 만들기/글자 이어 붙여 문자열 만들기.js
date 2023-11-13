function solution(my_string, index_list) {
    let answer = '';
    
    index_list.forEach((v) => {
        answer += my_string[v];
    })
    
    return answer;
}