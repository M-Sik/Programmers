function solution(my_strings, parts) {
    let answer = '';
    
    my_strings.forEach((v, i) => {
        const [j, k] = parts[i];
        answer += v.split('').splice(j, k-j+1).join('');
    })
    
    return answer;
}