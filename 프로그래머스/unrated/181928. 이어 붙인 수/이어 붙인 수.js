function solution(num_list) {
    let 홀수 = '';
    let 짝수 = '';
    
    num_list.forEach((v) => {
        v % 2 === 0 ? 짝수 += v.toString() : 홀수 += v.toString();
    })
    
    return Number(홀수) + Number(짝수);
}