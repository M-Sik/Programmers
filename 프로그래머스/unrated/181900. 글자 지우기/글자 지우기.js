function solution(my_string, indices) {
    let answer = '';
    
    [...my_string].forEach((v, i) => {
        if(!indices.includes(i)) answer += v;
    })
    
    return answer;
}