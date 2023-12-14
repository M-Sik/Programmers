function solution(str_list) {
    let answer = [];
    
    for(let i=0; i<str_list.length; i++) {
        if(str_list[i] === 'l') {
            answer.push(...str_list.slice(0, i));
            break;
        }
        else if(str_list[i] === 'r') {
            answer.push(...str_list.slice(i+1));
            break;
        }
    }
    
    return answer;
}