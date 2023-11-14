function solution(my_string, n) {
    let answer = [];
    my_string = my_string.split('').reverse();
    
    for(let i=0; i<n; i++) {
        const shift = my_string.shift();
        answer.unshift(shift);
    }
    
    return answer.join('');
}