function solution(my_string, m, c) {
    var answer = [];
    let str = '';
    
    for(let i=0; i<my_string.length; i++) {
        str += my_string[i];
        if((i+1) % m === 0) {
            answer.push(str);
            str = '';
        }
    }
    
    return answer.map((v) => v[c-1]).join('');
}