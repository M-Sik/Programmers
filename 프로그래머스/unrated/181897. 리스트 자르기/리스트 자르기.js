function solution(n, [a, b, c], num_list) {
    let answer = [];

    if(n === 1) answer = num_list.slice(0, b+1)
    else if(n === 2) answer = num_list.slice(a);
    else if(n === 3) answer = num_list.slice(a, b+1);
    else {
        answer = num_list.slice(a, b+1).filter((_, i) => (i+1) % c !== 0);
        console.log(answer)
    }
    
    return answer;
}